
<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md6 ma-5 style="max-width:500px">
      <v-form @submit.prevent="login">
        <v-card class="elevation-4 pa-3">
          <v-card-text>
            <v-text-field v-model="email" type="email" label="Email" flat append-icon="mdi-email" />

            <v-text-field
              v-model="password"
              :append-icon="showPassword ? 'lock' : 'remove_red_eye'"
              :type="showPassword ? 'text' : 'password'"
              name="password"
              label="Password"
              hint="At least 8 characters"
              required
              @click:append="showPassword = !showPassword"
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-btn block :loading="loading" type="submit">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  auth: false,
  data() {
    return {
      password: null,
      email: null,
      recaptchaToken: "",
      loading: false,
      showPassword: false
    };
  },
  mounted() {
    //this.$recaptcha.init();
    this.loading = false;
  },
  methods: {
    async login() {
      try {
        this.loading = true;

        // try {
        //   this.recaptchaToken = await this.$recaptcha.execute("login");
        //   console.log("ReCaptcha token:", this.recaptchaToken);
        // } catch (error) {
        //   console.log("Login error:", error);
        // }

        await this.$auth
          .loginWith("local", {
            data: {
              email: this.email,
              password: this.password,
              recaptcha_token: this.recaptchaToken
            }
          })
          .catch(error => {
            this.loading = false;
            console.log(error);
            this.$toast.error(error.response.data.message);
          });

        if (this.$auth.loggedIn) {
          this.loading = false;
          this.getUserInfo();
        }
      } catch (error) {
        console.log(error);
        this.loading = false;
        this.$toast.error("failed to login");
      }
    },
    getUserInfo() {
      this.$axios
        .get("/user/me")
        .then(res => {
          this.user = res.data;
          localStorage.setItem("user", JSON.stringify(this.user));

          console.log("/user/me data >>--->", res.data);
          this.isLoading = false;
          console.log("this.user login ->", this.user);

          if (this.user["is_locked"] == 1) {
            console.log("USER IS LOCKED");
            window.location.href = "/account_locked";
            return;
          }

          if (this.user["phone_verified"] == 0) {
            console.log("Phone verification required");
            window.location.href = "/phone_verification";
            return;
          }

          if (this.user["workplace_assigned"] == 0) {
            console.log("redirecting to pick place");
            window.location.href = "/places";
            return;
          }

          if (this.user["workplace_approved"] == 0) {
            console.log("place pending approval");
            window.location.href = "/places/pending_approval";
            return;
          }

          if (this.user["kyc_passed"] == 0) {
            console.log("USER DID NOT PASS KYC");
            localStorage.setItem("kyc_passed", false);
            window.location.href = "/kyc";
            return;
          }

          localStorage.setItem("kyc_passed", true);
          window.location.href = "/";
        })
        .catch(error => {
          console.log(error);
          this.flash(error, "error");
        });
    }
  }
};
</script>

<style lang="scss" scoped>
#styled-input {
  height: 48px;
}
.styled-input label[for] {
  height: 48px;
}
</style>
