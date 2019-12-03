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
    <v-app-bar fixed clipped-left app elevation="0">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title style="width: 150px" class="ml-0 pl-4">
        <nuxt-link style="text-decoration:none" to="/">
          <span class="display-1" style="color:#00bfa5">My</span>
          <span class="display-1" style="color:#ff5722">App</span>
        </nuxt-link>
      </v-toolbar-title>
      <div class="flex-grow-1"></div>
      <v-btn @click="goToUrl('#')" class="ma-2 text" outlined>write</v-btn>
      <v-btn @click="goToUrl('#')" class="ma-2" outlined>sign up</v-btn>
      <v-btn @click="goToUrl('#')" class="ma-2 primary">sign in</v-btn>
    </v-app-bar>
    <v-content>
      <nuxt />
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
          title: "Faq",
          to: "/faq"
        }
      ],
      miniVariant: false,
      right: false,
      rightDrawer: false,
      title: "Vuetify.js"
    };
  },
  methods: {
    goToUrl(url) {
      this.$router.push(url);
    },
    goToExternalUrl(url) {
      window.open(url, "_blank");
    }
  }
};
</script>
<style scoped>
#styled-input {
  height: 48px;
  width: 48px;
}
.styled-input label[for] {
  height: 48px;
}
.v-navigation-drawer > .list:not(.list--dense) .list__tile {
  font-size: 17px;
}
.avatar {
  max-width: 75px;
}
/* .list__tile--active.list__tile.list__tile--link {
} */
a.nuxt-link-exact-active.list__tile--active.list__tile.list__tile--link {
  font-weight: 900 !important;
}
.v-list-item {
  border-left: 10px solid transparent;
}
.v-list-item--active {
  color: #333;
  border-left: 10px solid #ff5722;
}
</style>
