<template>
  <div>
    <v-btn :to="{ name: 'CreateProduct' }" class="black" dark
      >Добавить новый</v-btn>
    <v-btn :to="{ name: 'ProductViewing' }" class="black ml-2" dark
      >Просмотр</v-btn>
    <table class="table is-striped is-bordered mt-2 is-fullwidth">
      <thead>
        <tr>
          <th>Наименование</th>
          <th>Цена</th>
          <th>Вид изделия</th>
          <th class="has-text-centered">Панель управления</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id_Product">
          <td>{{ item.Name }}</td>
          <td>{{ item.Price }}</td>
          <td>{{ item.View }}</td>
          <td class="has-text-centered">
            <v-btn
              :to="{ name: 'EditProduct', params: { id: item.id_Product } }"
              class="black" dark
              >Редактировать</v-btn>
            <v-btn
              class="white"
              @click="deleteProduct(item.id_Product)"
              >Удалить</v-btn>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "ProductList",
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
 
    // Delete Product
    async deleteProduct(id) {
      try {
        await axios.delete(`http://localhost:5000/product/${id}`);
        this.getProduct();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
</style>