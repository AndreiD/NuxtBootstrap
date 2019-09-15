
<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md6 ma-5 style="max-width:600px">
      <v-card class="elevation-4 pa-3">
        <v-card-text>
          <h3>Loging out</h3>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    errors: []
  }),
  mounted() {
    this.logout();
  },
  methods: {
    async logout() {
      await this.$auth.logout();
      window.location.href = "/";
    }
  }
};
</script>
