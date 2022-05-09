<template>
  <div>
    <div class="field">
      <label class="label">Адрес склада</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Warehouse Name"
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
      <v-btn class="black" dark @click="saveWarehouse">Сохранить</v-btn>
  </div>
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "AddWarehouse",
  data() {
    return {
      WarehouseAddress: "",
      Warehouse_Type_of_warehouse: "",
    };
  },
  methods: {
    // Create New warehouse
    async saveWarehouse() {
      try {
        await axios.post("http://localhost:5000/warehouse", {
          Address: this.WarehouseAddress,
          Type_of_warehouse: this.Warehouse_Type_of_warehouse,
        });
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