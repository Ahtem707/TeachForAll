<template>
<div>
    <div class="field">
      <label class="label">Наименование изделия</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Name"
          v-model="ProductName"
        />
      </div>
    </div>
 
    <div class="field">
      <label class="label">Цена изделия</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Price"
          v-model="ProductPrice"
        />
      </div>
    </div>

      <div class="field">
        <label class="label">Вид изделия</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="View"
            v-model="ProductView"
          />
        </div>
      </div>
      <v-btn class="black" dark @click="updateProduct">Редактировать</v-btn>
</div>
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "EditProduct",
  data() {
    return {
      ProductName: "",
      ProductPrice: "",
      ProductView: ""
    };
  },
  created: function () {
    this.getProductById();
  },
  methods: {
    // Get Product By Id
    async getProductById() {
      try {
        const response = await axios.get(
          `http://localhost:5000/product/${this.$route.params.id}`
        );
        this.ProductName = response.data.ProductName;
        this.ProductPrice = response.data.ProductPrice;
        this.ProductView = response.data.ProductView;
      } catch (err) {
        console.log(err);
      }
    },
 
    // Update product
    async updateProduct() {
      try {
        console.log(this.$route.params.id);
        await axios.put(
          `http://localhost:5000/product/${this.$route.params.id}`,
          {
            Name: this.ProductName,
            Price: this.ProductPrice,
            View: this.ProductView
          }
        );
        this.ProductName = "";
        this.ProductPrice = "";
        this.ProductView = "";
        this.$router.push("/product");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>