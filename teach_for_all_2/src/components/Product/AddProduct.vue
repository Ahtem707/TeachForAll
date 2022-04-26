<template>
  <div>
    <div class="field">
      <label class="label">Наименование</label>
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
      <label class="label">Цена</label>
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
        <label class="label">Вид</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="View"
            v-model="ProductView"
          />
        </div>
      </div>
      <v-btn class="black" dark @click="saveProduct">Сохранить</v-btn>
  </div>
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "AddProduct",
  data() {
    return {
      ProductName: "",
      ProductPrice: "",
      ProductView: ""
    };
  },
  methods: {
    // Create New product
    async saveProduct() {
      try {
        await axios.post("http://localhost:5000/product", {
            Name: this.ProductName,
            Price: this.ProductPrice,
            View: this.ProductView
        });
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