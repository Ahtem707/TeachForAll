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
    <v-btn class="black" dark @click="saveReviews">Сохранить</v-btn>
  </div>
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "AddReviews",
  data() {
    return {
      ReviewsReviews: "",
      Reviews_Name_client: "",
    };
  },
  methods: {
    // Create New reviews
    async saveReviews() {
      try {
        await axios.post("http://localhost:5000/reviews", {
          Reviews: this.ReviewsReviews,
          Name_client: this.Reviews_Name_client,
        });
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