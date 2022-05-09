<template>
  <div>
    <div class="field">
      <label class="label">Отзыв</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Reviews"
          v-model="ReviewsReviews"
        />
      </div>
    </div>
 
    <div class="field">
      <label class="label">Ваше имя</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Name client"
          v-model="Reviews_Name_client"
        />
      </div>
    </div>
      <v-btn class="black" dark @click="updateReviews">Редактировать</v-btn>
  </div>
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "EditReviews",
  data() {
    return {
      ReviewsReviews: "",
      Reviews_Name_client: "",
    };
  },
  created: function () {
    this.getReviewsById();
  },
  methods: {
    // Get Reviews By Id
    async getReviewsById() {
      try {
        const response = await axios.get(
          `http://localhost:5000/reviews/${this.$route.params.id}`
        );
        this.ReviewsReviews = response.data.ReviewsReviews;
        this.Reviews_Name_client = response.data.Reviews_Name_client;
      } catch (err) {
        console.log(err);
      }
    },
 
    // Update reviews
    async updateReviews() {
      try {
        console.log(this.$route.params.id);
        await axios.put(
          `http://localhost:5000/reviews/${this.$route.params.id}`,
          {
            Reviews: this.ReviewsReviews,
            Name_client: this.Reviews_Name_client,
          }
        );
        this.ReviewsReviews = "";
        this.Reviews_Name_client = "";
        this.$router.push("/reviews");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>