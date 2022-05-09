<template>
  <div>
    <div class="field">
      <label class="label">Адрес склада</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="WarehouseAddress"
          v-model="WarehouseAddress"
        />
      </div>
    </div>
 
    <div class="field">
      <label class="label">Тип склада</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Type_of_warehouse"
          v-model="Warehouse_Type_of_warehouse"
        />
      </div>
    </div>
      <v-btn class="black" dark @click="updateWarehouse">Редактировать</v-btn>
  </div>
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "EditWarehouse",
  data() {
    return {
      WarehouseAddress: "",
      Warehouse_Type_of_warehouse: "",
    };
  },
  created: function () {
    this.getWarehouseById();
  },
  methods: {
    // Get Warehouse By Id
    async getWarehouseById() {
      try {
        const response = await axios.get(
          `http://localhost:5000/warehouse/${this.$route.params.id}`
        );
        this.WarehouseAddress = response.data.WarehouseAddress;
        this.Warehouse_Type_of_warehouse = response.data.Warehouse_Type_of_warehouse;
      } catch (err) {
        console.log(err);
      }
    },
 
    // Update warehouse
    async updateWarehouse() {
      try {
        console.log(this.$route.params.id);
        await axios.put(
          `http://localhost:5000/warehouse/${this.$route.params.id}`,
          {
            Address: this.WarehouseAddress,
            Type_of_warehouse: this.Warehouse_Type_of_warehouse,
          }
        );
        this.WarehouseAddress = "";
        this.Warehouse_Type_of_warehouse = "";
        this.$router.push("/warehouse");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
</style>