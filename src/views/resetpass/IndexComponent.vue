<template>
  <section class="forget-password-page account">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-md-offset-3">
          <div class="block text-center">
            <h2 class="text-center">Create new password</h2>
            <div class="form-group">
              <input type="text" class="form-control" v-model="token" id="exampleInputEmail1" placeholder="Token">
            </div>
            <div class="form-group">
              <input type="password" class="form-control" v-model="password" id="password" placeholder="Password">
            </div>
            <div class="form-group">
              <input type="password" class="form-control" v-model="password_confirm" id="password_confirm" placeholder="Password confirmation">
            </div>
            <div class="text-center">
              <button @click.prevent="resetPass" type="submit" class="btn btn-main text-center">Create</button>
            </div>
            <p class="mt-20"><router-link :to="{ name:'account.login' }">Back to log in</router-link></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "IndexComponent",

  data(){
    return{
      email:null,
      token:null,
      password:null,
      password_confirm:null
    }
  },

  methods:{
    resetPass(){
      this.axios.post('http://127.0.0.1:8000/api/client/auth/reset', {
        email: this.email,
        token: this.token,
        password: this.password,
      })
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      })
    }
  }
}
</script>

<style scoped>

</style>