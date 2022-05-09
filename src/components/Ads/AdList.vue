<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm8 offset-lg2>
        <h1 class="text--secondary mb-7">Изделия</h1>

        <v-card
          class="elevation-10 mt-5"
          v-for="ad in myAds"
          :key="ad.id"
        >
          <v-layout row>
            <v-flex xs4>
              <v-img
                :src="ad.imageSrc"
                height="180px"
                width="300px"
              ></v-img>
            </v-flex>
            <v-flex xs8>
              <v-card-text>
                <h2 class="text--primary">{{ad.title}}</h2>
                <p>{{ad.description}}</p>
              </v-card-text>
            <v-flex xs11>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn dark
                  class="black" 
                  :to="'/ad/' + ad.id"
                >Открыть</v-btn>
              </v-card-actions>
            </v-flex>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    computed: {
      myAds () {
        return this.$store.getters.myAds
      }
    }
  }
</script>
