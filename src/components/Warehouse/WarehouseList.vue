<template>
  <div>
    <v-btn :to="{ name: 'CreateWarehouse' }" class="black mr-3" dark
      >Добавить новый</v-btn>
      <v-btn :to="{ name: 'ViewingWarehouse' }" class="black" dark
      >Просмотр</v-btn>
    <table class="table is-striped is-bordered mt-2 is-fullwidth">
      <thead>
        <tr>
          <th>Адрес</th>
          <th>Тип склада</th>
          <th class="has-text-centered">Панель управления</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id_Warehouse">
          <td>{{ item.Address }}</td>
          <td>{{ item.Type_of_warehouse }}</td>
          <td class="has-text-centered">
            <v-btn
              :to="{ name: 'EditWarehouse', params: { id: item.id_Warehouse } }"
              class="black mr-2" dark
              >Редактировать</v-btn>
            <v-btn
              class="white"
              @click="deleteWarehouse(item.id_Warehouse)"
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
  name: "WarehouseList",
  data() {
    return {
      items: [],
    };
  },
 
  created() {
    this.getWarehouse();
  },
 
  methods: {
    // Get All Warehouse
    async getWarehouse() {
      try {
        const response = await axios.get("http://localhost:5000/warehouse");
        this.items = response.data;
      } catch (err) {
        console.log(err);
      }
    },
 
    // Delete Warehouse
    async deleteWarehouse(id) {
      try {
        await axios.delete(`http://localhost:5000/warehouse/${id}`);
        this.getWarehouse();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
</style>