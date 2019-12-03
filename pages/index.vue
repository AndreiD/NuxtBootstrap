<template>
  <v-container>
    <section>
      <v-layout column wrap class="my-12" align-center>
        <v-flex xs12 sm4 class="my-4">
          <div class="text-center">
            <h2 class="display-3">
              Quality
              <span
                style="background-color:black; padding: 2px 7px 2px 7px;color:#fff"
              >Stories</span>
            </h2>
            <h3 class="mt-5">My APP is not like any other platform out there</h3>
          </div>
        </v-flex>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex xs12 md4>
                <v-card flat class="transparent">
                  <v-card-text class="text-center">
                    <v-icon x-large color="#888">mdi-palette</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-center">Quality Content</div>
                  </v-card-title>
                  <v-card-text>
                    We made it really, really simple for people to make a blog and put whatever they want on it.
                    <br />Quality content gets rewarded
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card flat class="transparent">
                  <v-card-text class="text-center">
                    <v-icon x-large color="#888">mdi-hand-heart</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline">Reward authors that you love</div>
                  </v-card-title>
                  <v-card-text>
                    Quality comes at a price. Everytime you hit the heart button the author gets paid.
                    <br />More explained in our F.A.Q section
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card flat class="transparent">
                  <v-card-text class="text-center">
                    <v-icon x-large color="#888">mdi-coin</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-center">Earn money by writing</div>
                  </v-card-title>
                  <v-card-text>
                    The more hearts you manage to get from users, the more money you make.
                    Your posts have a higher chance to get in the front.
                    <br />See FAQ for more info
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>
  </v-container>
</template>

<script>
export default {
  auth: false,
  data() {
    return {
      search: ""
    };
  },
  mounted() {
    this.search = "";
  },
  methods: {
    toSearchResolver() {}
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
