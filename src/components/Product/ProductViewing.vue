<template>
  <div>
    <v-btn :to="{ name: 'IndexProduct' }" class="black" dark
      >Назад</v-btn>
    <table class="table is-striped is-bordered mt-2 is-fullwidth">
      <thead>
        <tr>
            <th>№</th>
            <th>Наименование</th>
            <th>Цена</th>
            <th>Вид изделия</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id_Product">
            <td>{{ item.id_Product }}</td>
            <td>{{ item.Name }}</td>
            <td>{{ item.Price }}</td>
            <td>{{ item.View }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "ProductViewing",
  data() {
    return {
      items: [],
    };
  },
 
  created() {
    this.getProduct();
  },
 
  methods: {
    // Get All Product
    async getProduct() {
      try {
        const response = await axios.get("http://localhost:5000/product");
        this.items = response.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>