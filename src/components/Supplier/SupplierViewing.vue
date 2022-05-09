<template>
  <div>
    <v-btn :to="{ name: 'IndexSupplier' }" class="black mt-5" dark
      >Назад</v-btn>
    <table class="table is-striped is-bordered mt-2 is-fullwidth">
      <thead>
        <tr>
            <th>№</th>
            <th>Наименование организации</th>
            <th>ФИО генерального директора</th>
            <th>Адрес</th>
            <th>Телефон</th>
            <th>Почта</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id_Supplier">
            <td>{{ item.id_Supplier }}</td>
            <td>{{ item.Name_organization }}</td>
            <td>{{ item.Full_name_General_Director }}</td>
            <td>{{ item.Address }}</td>
            <td>{{ item.Phone_number }}</td>
            <td>{{ item.Email }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "SupplierViewing",
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
  },
};
</script>