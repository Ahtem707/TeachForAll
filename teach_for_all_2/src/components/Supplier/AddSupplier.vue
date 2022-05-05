<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md6>
        <v-card class="elevation-12" style="border-radius:60px ;border: 6px solid #6905A6;">
          <div class="" dark color="#6905A6">
            <p class="text-center" style="padding-top:3%; padding-bottom: 5%; font-size: 25px; font-weight: 500;">Добавление нового курса</p>
          </div>
          
      <v-form v-model="valid" ref="form" lazy-validation>
      <v-container>
      <v-layout row wrap>

        <v-flex xs12 sm6 style="padding-right:3%; padding-left:3%">
          <v-text-field 
                outlined
                name="logo"
                label="Логотип"
                type="logo"
                v-model="logo"
                :rules="logoRules"></v-text-field>
        </v-flex>
        <v-flex xs12 sm6 style="padding-right:3%; padding-left:3%">
          <v-text-field
                outlined
                name="disp"
                label="Дисциплина"
                type="disp"
                v-model="disp"
                :rules="dispRules"></v-text-field>
        </v-flex>
        <v-flex xs12 sm6 style="padding-right:3%; padding-left:3%">
          <v-text-field
                outlined
                name="dispname"
                label="Аббревиатура"
                type="dispname"
                v-model="dispname"
                :rules="dispnameRules"></v-text-field>
        </v-flex>
        <v-flex xs12 sm6 style="padding-right:3%; padding-left:3%">
          <v-text-field
                disabled
                outlined
                name="nameavtor"
                label="Автор"
                type="nameavtor"
                v-model="nameavtor"
                :rules="nameavtorRules"></v-text-field>
        </v-flex>
        <v-flex xs12 sm6 style="padding-right:3%; padding-left:3%">
          <v-text-field
                outlined
                name="Ur"
                label="Колличество часов"
                type="Ur"
                v-model="Ur"
                :rules="UrRules"></v-text-field>
        </v-flex>
        <v-flex xs12 sm6 style="padding-right:3%; padding-left:3%">
          <v-text-field
                outlined
                name="form"
                label="Формат"
                type="form"
                v-model="form"
                :rules="formRules"></v-text-field>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
         
               
<v-card-actions style="padding-bottom:3%">
<v-btn :to="{ name: 'IndexSupplier' }" class="mt-5 mb-5" 
  style="margin-left: 7%; background-color: white; border: 3px solid #000000; box-sizing: border-box; border-radius: 100px; padding: 4%"><v-icon>mdi-arrow-left</v-icon></v-btn>
  <v-spacer></v-spacer>
  <v-btn
    style="margin-right: 7%;background-color: white; border: 3px solid #000000; box-sizing: border-box; border-radius: 27px; padding: 4%"
    @click="onSubmit"
    :loading="loading">Добавить</v-btn>
</v-card-actions>
</v-card>
</v-flex>
</v-layout>
</v-container>
</template>
 
<script>
  export default {
      data () {
        return {
          logo: '',
          disp: '',
          dispname: '',
          nameavtor: '',
          Ur: '',
          form: '',
          valid: false,
          logoRules: [
            v => !!v || 'Добавьте Логотип',
            v => (v && v.length >= 0) || ''
          ],
          dispRules: [
            v => !!v || 'Введите Дисциплину',
            v => (v && v.length >= 0) || ''
          ],
          dispnameRules: [
            v => !!v || 'Введите Аббревиатуру',
            v => (v && v.length >= 0) || ''
          ],
          nameavtorRules: [
            
          ],
          UrRules: [
            v => !!v || 'Введите колличество часов',
            v => (v && v.length >= 0) || ''
          ],
          formRules: [
            v => !!v || 'Введите Формат',
            v => (v && v.length >= 0) || ''
          ]
        }
      }
    }

    
</script>