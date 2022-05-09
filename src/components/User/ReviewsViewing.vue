<template>
    <div>
        <v-btn :to="{ name: 'IndexReviews' }" class="black" dark
        >Назад</v-btn>
        <v-container grid-list-lg>
            <v-layout row wrap>
            <v-flex xs12 sm5 md4
                v-for="item of items"
                :key="item.id_Reviews">
                <v-card class="elevation-12">
                    <v-card-title primary-title>
                    <div>
                        <h3 class="headline mb-5">Отзыв: "{{item.Reviews}}"</h3>
                        <v-divider></v-divider>
                        <div>Пользователь: {{item.Name_client}}</div>
                    </div>
                    </v-card-title>
                </v-card>
            </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
// import axios
import axios from "axios";
 
export default {
  name: "ReviewsViewing",
  data() {
    return {
      items: [],
    };
  },
 
  created() {
    this.getReviews();
  },
 
  methods: {
    // Get All Supplier
    async getReviews() {
      try {
        const response = await axios.get("http://localhost:5000/reviews");
        this.items = response.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
}
</script>
