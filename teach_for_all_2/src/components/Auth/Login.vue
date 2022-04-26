<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md6>
        <v-card class="elevation-12" style="border-radius:60px ;border: 6px solid #6905A6;">
          <div class="" dark color="#6905A6">
            <p class="text-center" style="padding-top:3%; font-size: 25px; font-weight: 500;">Вход</p>
          </div>
          <v-card-text>
            <v-form v-model="valid" ref="form" validation>
              <v-col cols="12" sm="6" md="12">
              <v-text-field
                outlined
                name="email"
                label="Почта"
                type="email"
                v-model="email"
                :rules="emailRules"></v-text-field></v-col>
               <v-col cols="12" sm="6" md="12"> 
              <v-text-field
                outlined
                name="password"
                label="Пароль"
                type="password"
                :counter="6"
                v-model="password"
                :rules="passwordRules"></v-text-field></v-col>
            </v-form>
          </v-card-text>
          <v-card-actions style="padding-bottom:3%">
            <v-spacer></v-spacer>
            <v-btn
              style="background-color: white; border: 3px solid #000000; box-sizing: border-box; border-radius: 27px; padding: 3%"
              @click="onSubmit"
              :loading="loading">Войти</v-btn>
              <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
  export default {
    data () {
      return {
        email: '',
        password: '',
        valid: false,
        emailRules: [
          v => !!v || 'Неверная почта',
          v => emailRegex.test(v) || 'Неверная почта'
        ],
        passwordRules: [
          v => !!v || 'Введите пароль',
          v => (v && v.length >= 6) || 'Пароль должен содержать не менее 6 символов'
        ]
      }
    },
    computed: {
      loading () {
        return this.$store.getters.loading
      }
    },
    methods: {
      onSubmit () {
        if (this.$refs.form.validate()) {
          const user = {
            email: this.email,
            password: this.password
          }
          this.$store.dispatch('loginUser', user)
            .then (() => {
              this.$router.push('/')
            })
            .catch (() => {})
        }
      }
    },
    created () {
      if (this.$route.query['loginError']) {
        this.$store.dispatch('setError', 'Пожалуйста, авторизуйтесь!')
      }
    }
  }
</script>
