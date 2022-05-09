<template>
  <div>
    <v-btn :to="{ name: 'CreateSupplier' }" class="mt-5 mb-5" style="background-color: white; border: 3px solid #000000; box-sizing: border-box; border-radius: 27px;"
      >Добавить курс</v-btn>
  <v-card class="mt-2 p-3">
    <v-card-title inline>Сводка по курсам:</v-card-title>
    
  </v-card>
  </div>
</template>

<script>
// import axios
import axios from "axios";
 
export default {
  name: "SupplierList",
  data() {
    return {
      items: [],
    };
  },
 
  created() {
    this.getSupplier();
  },
 
  methods: {
    // Get All Supplier
    async getSupplier() {
      try {
        const response = await axios.get("http://localhost:5000/supplier");
        this.items = response.data;
      } catch (err) {
        console.log(err);
      }
    },
 
    // Delete Supplier
    async deleteSupplier(id) {
      try {
        await axios.delete(`http://localhost:5000/supplier/${id}`);
        this.getSupplier();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>