<template>
  <div>
    <v-btn :to="{ name: 'CreateSupplier' }" class="black mt-5" dark
      >Добавить новый</v-btn>
    <v-btn :to="{ name: 'SupplierViewing' }" class="black mt-5 ml-2" dark
      >Просмотр</v-btn>
    <table class="table is-striped is-bordered mt-2 is-fullwidth">
      <thead>
        <tr>
          <th>Наименование организации</th>
          <th>ФИО генерального директора</th>
          <th>Адрес</th>
          <th>Телефон</th>
          <th>Почта</th>
          <th class="has-text-centered">Панель управления</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id_Supplier">
          <td>{{ item.Name_organization }}</td>
          <td>{{ item.Full_name_General_Director }}</td>
          <td>{{ item.Address }}</td>
          <td>{{ item.Phone_number }}</td>
          <td>{{ item.Email }}</td>
          <td class="has-text-centered">
            <v-btn
              :to="{ name: 'EditSupplier', params: { id: item.id_Supplier } }"
              class="black mr-2" dark
              >Редактировать</v-btn>
            <v-btn
              class="white"
              @click="deleteSupplier(item.id_Supplier)"
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