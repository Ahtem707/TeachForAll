<template>
  <div>
    <v-btn :to="{ name: 'IndexWarehouse' }" class="black md-3" dark
      >Назад</v-btn>
    <table class="table is-striped is-bordered mt-2 is-fullwidth">
      <thead>
        <tr>
            <th>№</th>    
            <th>Адрес</th>
            <th>Тип склада</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id_Warehouse">
            <td>{{ item.id_Warehouse }}</td>
            <td>{{ item.Address }}</td>
            <td>{{ item.Type_of_warehouse }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "WarehouseViewing",
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
  },
};
</script>
 
<style>
</style>