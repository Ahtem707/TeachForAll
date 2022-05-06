<template>
  <div id="app" class="container is-max-desktop">
  <v-app>
  <v-navigation-drawer app v-model="drawer" style="background-color:#4A0375;">
      <v-list-item style="background-color:#6905A6; padding: 3%">
          <v-list-item-title class="title" style="background-color:#6905A6 ;color: white;">
            Разделы:
          </v-list-item-title>
      </v-list-item>
      <v-list dense color="#4A0375">
        <v-list-item-group color="black">
          <v-list-item style="border-style: solid; border-color:white; margin-bottom: 2%"
          v-for="pink in pinks"
          :key="pink.title"
          :to="pink.url">
            <v-list-item-content style="color:white">
              <v-list-item-title>{{ pink.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item  style="border-style: solid; border-color:white;"
          @click="onLogout"
          v-if="isUserLoggedIn"
          text>
            <v-list-item-content style="color:white">
              <v-list-item-title>Выход</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
  </v-navigation-drawer>
  <v-app-bar app dark color="#6905A6">
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-toolbar-title class="hidden-sm-and-down">
      <v-btn to="/" outlined large><img src="./assets/logo@2x.png" left/>TEACH FOR ALL</v-btn>
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
        // {title:"Добавить объявление", icon:"mdi-note-plus-outline", url:"/new"},
        // {title:"Изделия", icon:"mdi-view-list-outline", url:"/list"},
        // {title:"Отзывы", icon:"mdi-bookmark-multiple-outline", url:"/reviews"},
        ]
      }
      return [
        {title:"Вход", icon:"mdi-account-lock", url:"/login"},
        {title:"Регистрация", icon:"mdi-pencil-box-multiple-outline", url:"/registration"},
      ]
    },
    pinks () {
      if (this.isUserLoggedIn) {
        return [
        {title:"Главная", icon:"", url:"/"},
        {title:"Все дисциплины", icon:"mdi-view-list-outline", url:"/list"},
        {title:"Мои дисциплины", icon:"mdi-car-estate", url:"/supplier"},
        {title:"Актуальное", icon:"mdi-warehouse", url:"/warehouse"},
        {title:"Избранные", icon:"mdi-archive-alert", url:"/product"},
        {title:"Календарь", icon:"mdi-bookmark-multiple-outline", url:"/1"},
        ]
      }
      return [
        {title:"Вход", icon:"mdi-account-lock", url:"/login"},
        {title:"Регистрация", icon:"mdi-pencil-box-multiple-outline", url:"/registration"},
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