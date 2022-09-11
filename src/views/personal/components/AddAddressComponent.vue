<template>
  <div class="table-responsive address-form">
    <table class="table">
      <thead>
      <tr>
        <th>Country</th>
        <th>State</th>
        <th>City</th>
        <th>Street</th>
        <th>House</th>
        <th>Flat</th>
        <th>Zip</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td><input type="text" v-model="country" class="form-control address-input"></td>
        <td><input type="text" v-model="state" class="form-control address-input"></td>
        <td><input type="text" v-model="city" class="form-control address-input"></td>
        <td><input type="text" v-model="street" class="form-control address-input"></td>
        <td><input type="text" v-model="house" class="form-control address-input"></td>
        <td><input type="text" v-model="flat" class="form-control address-input"></td>
        <td><input type="text" v-model="zip" class="form-control address-input"></td>
        <td><button class="btn" @click.prevent="addAddress" style="color:white; background-color:black">Add</button></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import api from "../../../api";
export default {
  name: "AddAddressComponent",

  data(){
    return{
      country:'',
      state:'',
      city:'',
      street:'',
      house:null,
      flat:null,
      zip:null
    }
  },

  props:{
    userId: Number
  },

  methods:{
    addAddress(){
      // let data = new FormData();
      // data.append('country', this.country);
      // data.append('state', this.state);
      // data.append('city', this.city);
      // data.append('street', this.street);
      // data.append('house', this.house);
      // data.append('flat', this.flat);
      // data.append('zip', this.zip)
      api.post(`http://127.0.0.1:8000/api/client/profile/${this.userId}/address`, {
        country: this.country,
        state: this.state,
        city: this.city,
        street: this.street,
        house: this.house,
        flat: this.flat,
        zip: this.zip,
      })
          .then(res => {
            console.log(res);
            this.$wkToast(res.data.message, {
              horizontalPosition: 'right',
              verticalPosition: 'top',
              transition: 'fade',
            })
          })
          .catch(error => {
            console.log(error)
          })
    }
  }
}
</script>

<style scoped>
.address-input{
  max-height: 35px;
}
</style>