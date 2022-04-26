<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md6>
        <v-card class="elevation-12" style="border-radius:60px ;border: 6px solid #6905A6;">
          <div class="" dark color="#6905A6">
            <p class="text-center" style="padding-top:3%; padding-bottom: 5%; font-size: 25px; font-weight: 500;">Регистрация</p>
          </div>
          
      <v-form v-model="valid" ref="form" lazy-validation>
      <v-container>
      <v-layout row wrap>

        <v-flex xs12 sm6 style="padding-right:3%; padding-left:3%">
          <v-text-field 
                outlined
                name="surname"
                label="Фамилия"
                type="surname"
                v-model="surname"
                :rules="surnameRules"></v-text-field>
        </v-flex>
        <v-flex xs12 sm6 style="padding-right:3%; padding-left:3%">
          <v-text-field
                outlined
                name="name"
                label="Имя"
                type="name"
                v-model="name"
                :rules="nameRules"></v-text-field>
        </v-flex>
        <v-flex xs12 sm6 style="padding-right:3%; padding-left:3%">
          <v-text-field
                outlined
                name="patronymic"
                label="Отчество"
                type="patronymic"
                v-model="patronymic"
                :rules="patronymicRules"></v-text-field>
        </v-flex>
        <v-flex xs12 sm6 style="padding-right:3%; padding-left:3%">
          <v-text-field
                outlined
                name="email"
                label="Почта"
                type="email"
                v-model="email"
                :rules="emailRules"></v-text-field>
        </v-flex>
        <v-flex xs12 sm6 style="padding-right:3%; padding-left:3%">
          <v-text-field
                outlined
                name="phone"
                label="Телефон"
                type="phone"
                v-model="phone"
                :rules="phoneRules"></v-text-field>
        </v-flex>
        <v-flex xs12 sm6 style="padding-right:3%; padding-left:3%">
          <v-text-field
                outlined
                name="password"
                label="Пароль"
                type="password"
                :counter="6"
                v-model="password"
                :rules="passwordRules"></v-text-field>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
         
               
<v-card-actions style="padding-bottom:3%">
  <v-spacer></v-spacer>
  <v-btn
    style="background-color: white; border: 3px solid #000000; box-sizing: border-box; border-radius: 27px;
    padding: 4%"
    @click="onSubmit"
    :loading="loading">Зарегестрироваться</v-btn>
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
        surname: '',
        name: '',
        patronymic: '',
        email: '',
        phone: '',
        password: '',
        valid: false,
        surnameRules: [
          v => !!v || 'Введите Фамилию',
          v => (v && v.length >= 0) || ''
        ],
        nameRules: [
          v => !!v || 'Введите Имя',
          v => (v && v.length >= 0) || ''
        ],
        patronymicRules: [
          v => !!v || 'Введите Отчество',
          v => (v && v.length >= 0) || ''
        ],
        emailRules: [
          v => !!v || 'Введите почту',
          v => emailRegex.test(v) || 'Электронная почта должна быть действующей'
        ],
        phoneRules: [
          v => !!v || 'Введите телефон',
          v => (v && v.length >= 0) || ''
        ],
        passwordRules: [
          v => !!v || 'Введите пароль',
          v => (v && v.length >= 6) || 'Пародь должен состоять не менее чем из 6 символов'
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

          this.$store.dispatch('registerUser', user)
            .then (() => {
              this.$router.push('/')
            })
            .catch (() => {})
        }
      }
    }
  }
</script>
