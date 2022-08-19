<template>
  <section class="forget-password-page account">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-md-offset-3">
          <div class="block text-center">
            <h2 class="text-center">Welcome Back</h2>
            <p>Please enter the email address for your account. A verification code will be sent to you. Once you have received the verification code, you will be able to choose a new password for your account.</p>
            <div class="form-group">
              <input type="email" class="form-control" v-model="email" id="exampleInputEmail1" placeholder="Account email address">
            </div>
            <div class="text-center">
              <button @click.prevent="forgotPass" type="submit" class="btn btn-main text-center">Request password reset</button>
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
    }
  },

  methods:{
    forgotPass(){
      this.axios.post('http://127.0.0.1:8000/api/auth/forgot', {email:this.email})
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