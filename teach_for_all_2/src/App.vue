<template>
  <div id="app" class="container is-max-desktop">
  <v-app>
  <v-navigation-drawer app v-model="drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Магазин
          </v-list-item-title>
          <v-list-item-subtitle>
            кондитерских изделий
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-item-group color="black">
          <v-list-item
          v-for="pink in pinks"
          :key="pink.title"
          :to="pink.url">
            <v-list-item-icon>
              <v-icon>{{ pink.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ pink.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item
          @click="onLogout"
          v-if="isUserLoggedIn"
          text>
            <v-list-item-icon>
              <v-icon>mdi-exit-to-app</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Выход</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
  </v-navigation-drawer>
  <v-app-bar app dark color="#6905A6">
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-toolbar-title class="hidden-sm-and-down">
      <v-btn to="/" outlined large><v-icon left>mdi-paw</v-icon>Основная</v-btn>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
       <v-btn
       v-for="link in links"
       :key="link.title"
       :to="link.url"
       text><v-icon left>{{ link.icon }}</v-icon>{{ link.title }}</v-btn>
        <v-btn
       @click="onLogout"
       v-if="isUserLoggedIn"
       text><v-icon left>mdi-exit-to-app</v-icon>Выход</v-btn>
    </v-toolbar-items>
  </v-app-bar>
  <v-main>
    <router-view></router-view>
  </v-main>
  <template v-if='error'>
    <v-snackbar
        color="red"
        @input="closeError"
        :value="true"
        :multi-line="true"
        :timeout="5000">
        {{error}}
      <v-btn
          dark
          text
          @click.native="closeError"
        >
          Close
      </v-btn>
    </v-snackbar>
  </template>
  </v-app>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      drawer: false,
    }
  },
  computed: {
    error () {
      return this.$store.getters.error
    },
    isUserLoggedIn () {
      return this.$store.getters.isUserLoggedIn
    },
    links () {
      if (this.isUserLoggedIn) {
        return [
        {title:"Добавить объявление", icon:"mdi-note-plus-outline", url:"/new"},
        {title:"Изделия", icon:"mdi-view-list-outline", url:"/list"},
        {title:"Отзывы", icon:"mdi-bookmark-multiple-outline", url:"/reviews"},
        ]
      }
      return [
        {title:"Логин", icon:"mdi-lock", url:"/login"},
        {title:"Регистрация", icon:"mdi-face", url:"/registration"},
      ]
    },
    pinks () {
      if (this.isUserLoggedIn) {
        return [
        {title:"Изделия", icon:"mdi-view-list-outline", url:"/list"},
        {title:"Поставщики", icon:"mdi-car-estate", url:"/supplier"},
        {title:"Склады", icon:"mdi-warehouse", url:"/warehouse"},
        {title:"Товар", icon:"mdi-archive-alert", url:"/product"},
        {title:"Отзывы", icon:"mdi-bookmark-multiple-outline", url:"/reviews"},
        ]
      }
      return [
        {title:"Логин", icon:"mdi-lock", url:"/login"},
        {title:"Регистрация", icon:"mdi-face", url:"/registration"},
      ]
    },

  },
  methods: {
    closeError () {
      this.$store.dispatch('clearError')
    },
    onLogout () {
      this.$store.dispatch('logoutUser')
      this.$router.push('/')
    }
  }
}
</script>

<style>
/* import style bulma */
@import "~bulma/css/bulma.css";
</style>