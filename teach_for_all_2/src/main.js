import Vue from 'vue'
import Router from 'vue-router'
import Parallax from 'vue-parallaxy'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router/index'
import store from './store'
import firebase from 'firebase'

Vue.use(Router)
Vue.config.productionTip = false

new Vue({
  vuetify,
  store,
  Parallax,
  render: h => h(App),
  router:router,
  created () {
    var firebaseConfig = {
      apiKey: "AIzaSyCy3rDSbH4ehI92snmSrAhTpheeyJACPnM",
      authDomain: "my-app-a0268.firebaseapp.com",
      projectId: "my-app-a0268",
      storageBucket: "my-app-a0268.appspot.com",
      messagingSenderId: "168530930311",
      appId: "1:168530930311:web:0a618552f20b0625412622",
      measurementId: "G-538D0TK0QV"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })
  }
}).$mount('#app')
