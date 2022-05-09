<template>
    <div>
        <v-btn :to="{ name: 'CreateReviews' }" class="black" dark
        >Добавить отзыв</v-btn>
        <v-btn :to="{ name: 'ReviewsViewing' }" class="black ml-2" dark
        >Просмотр</v-btn>
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
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="black mr-2" dark :to="{ name: 'EditReviews', params: { id: item.id_Reviews } }">Редактировать</v-btn>
                        <v-btn @click="deleteReviews(item.id_Reviews)" raised dark class="black">Удалить</v-btn>
                    </v-card-actions>
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
  name: "ReviewsList",
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
 
    // Delete Supplier
    async deleteReviews(id) {
      try {
        await axios.delete(`http://localhost:5000/reviews/${id}`);
        this.getReviews();
      } catch (err) {
        console.log(err);
      }
    },
  },
}
</script>
