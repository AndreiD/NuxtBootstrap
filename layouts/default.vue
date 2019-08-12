
<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" fixed clipped app>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" link exact>
          <v-list-item-action>
            <v-icon class="mr-2" right>{{ item.icon }}</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title class="ml-2" v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar dense fixed clipped-left app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <img src="@/assets/icon.png" style="height: 40px;" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn icon color="primary" @click="$vuetify.theme.dark = !$vuetify.theme.dark">
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&nbsp;YourCompany &copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: "apps",
          title: "Welcome",
          to: "/"
        },
        {
          icon: "bubble_chart",
          title: "Inspire",
          to: "/inspire"
        },
        {
          icon: "account_circle",
          title: "Users",
          to: "/users"
        }
      ],
      miniVariant: false,
      right: false,
      rightDrawer: false,
      title: "Vuetify.js"
    };
  }
};
</script>
