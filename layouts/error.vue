<template>
  <v-app dark>
    <v-layout column justify-center align-center>
      <v-flex xs12 sm8 md6>
        <div style="text-align: center; min-width:300px">
          <div v-if="error.statusCode === 404">
            <h1>{{ pageNotFound }}</h1>
            <p>
              Check that you typed the address correctly, go back to your previous page
              <br />or try using the search to find something specific
            </p>
          </div>
          <div v-else>
            <h1>{{ otherError }}</h1>
          </div>
          <v-spacer />
          <v-btn class="primary" to="/" nuxt>go to home page</v-btn>
        </div>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
export default {
  layout: "empty",
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title
    };
  },
  data() {
    return {
      pageNotFound: "404 Not Found",
      otherError: "An error occurred"
    };
  }
};
</script>
