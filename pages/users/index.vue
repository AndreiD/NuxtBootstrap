<template>
  <v-container fill-height>
    <v-layout justify-center align-center>
      <v-flex shrink>
        <v-card class="mx-auto" max-width="400">
          <v-img
            class="white--text"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
            <v-card-title class="align-end fill-height">Top 10 Australian beaches</v-card-title>
          </v-img>

          <v-card-text>
            <span>Number 10</span>
            <br />
            <span class="text--primary">
              <span>Whitehaven Beach</span>
              <br />
              <span>Whitsunday Island, Whitsunday Islands</span>
            </span>
          </v-card-text>

          <v-card-actions>
            <v-btn text color="orange">Share</v-btn>
            <v-btn text color="orange">Explore</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  created() {
    this.fetchSomething();
  },
  methods: {
    async fetchSomething() {
      this.$toast.success("Loading your IP...");
      //this.$toast.success('Successfully authenticated')
      const ip = await this.$axios.$get("http://icanhazip.com");
      console.log("My ip is: " + ip);
    }
  }
};
</script>
