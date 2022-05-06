<template>
<div>
    <div class="field">
    <label class="label">Наименование организации</label>
    <div class="control">
        <input
        class="input"
        type="text"
        placeholder="Supplier Name organization"
        v-model="SupplierName_organization"
        />
    </div>
    </div>

    <div class="field">
        <label class="label">ФИО ген директора</label>
        <div class="control">
        <input
            class="input"
            type="text"
            placeholder="Supplier Full name General Director"
            v-model="SupplierFull_name_General_Director"
        />
        </div>
    </div>

    <div class="field">
        <label class="label">Адрес</label>
        <div class="control">
        <input
            class="input"
            type="text"
            placeholder="Supplier Address"
            v-model="SupplierAddress"
        />
        </div>
    </div>

    <div class="field">
        <label class="label">Телефон</label>
        <div class="control">
        <input
            class="input"
            type="text"
            placeholder="Supplier Phone number"
            v-model="SupplierPhone_number"
        />
        </div>
    </div>

    <div class="field">
    <label class="label">Почта</label>
    <div class="control">
        <input
        class="input"
        type="text"
        placeholder="Supplier Email"
        v-model="SupplierEmail"
        />
    </div>
    </div>
    <v-btn class="black" dark @click="saveSupplier">Сохранить</v-btn>
</div>
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "EditSupplier",
  data() {
    return {
        SupplierName_organization: "",
        SupplierFull_name_General_Director: "",
        SupplierAddress: "",
        SupplierPhone_number: "",
        SupplierEmail: ""
    };
  },
  created: function () {
    this.getSupplierById();
  },
  methods: {
    // Get Supplier By Id
    async getSupplierById() {
      try {
        const response = await axios.get(
          `http://localhost:5000/supplier/${this.$route.params.id}`
        );
        this.SupplierName_organization = response.data.SupplierName_organization;
        this.SupplierFull_name_General_Director = response.data.SupplierFull_name_General_Director;
        this.SupplierAddress = response.data.SupplierAddress;
        this.SupplierPhone_number = response.data.SupplierPhone_number;
        this.SupplierEmail = response.data.SupplierEmail;
      } catch (err) {
        console.log(err);
      }
    },
 
    // Update warehouse
    async updateSupplier() {
      try {
        console.log(this.$route.params.id);
        await axios.put(
          `http://localhost:5000/supplier/${this.$route.params.id}`,
          {
            Name_organization: this.SupplierName_organization,
            Full_name_General_Director: this.SupplierFull_name_General_Director,
            Address: this.SupplierAddress,
            Phone_number: this.SupplierPhone_number,
            Email: this.SupplierEmail
          }
        );
        this.SupplierName_organization = "";
        this.SupplierFull_name_General_Director = "";
        this.SupplierAddress = "";
        this.SupplierPhone_number = "";
        this.SupplierEmail = "";
        this.$router.push("/supplier");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>