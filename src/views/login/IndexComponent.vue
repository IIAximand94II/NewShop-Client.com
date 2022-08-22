<template>
  <section class="signin-page account">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-md-offset-3">
          <div class="block text-center">
            <h2 class="text-center">Welcome Back</h2>
              <div class="form-group">
                <input type="email" class="form-control" v-model="email" placeholder="Email" @blur="v$.email.$touch">
                <div v-if="v$.email.$error" class="error-block text-left">
                  <span class="text-danger"><i class="tf-ion-close-circled"></i>{{ v$.email.$errors[0].$message}}</span>
                </div>
              </div>
              <div class="form-group">
                <input type="password" class="form-control" v-model="password" placeholder="Password" @blur="v$.password.$touch">
                <div v-if="v$.password.$error" class="error-block text-left">
                  <span class="text-danger"><i class="tf-ion-close-circled"></i>{{ v$.password.$errors[0].$message}}</span>
                </div>
              </div>
              <div class="text-center">
                <button @click.prevent="loginin" type="submit" class="btn btn-main text-center" >Login</button>
              </div>
            <p class="mt-20">New in this site ?<router-link :to="{ name:'user.signin' }"> Create New Account</router-link></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, email, minLength, maxLength, sameAs, } from '@vuelidate/validators'
export default {
  name: "IndexComponent",

  mounted() {

  },

  data(){
    return{
      email:null,
      password:null,
    }
  },

  setup () {
    return { v$: useVuelidate() }
  },

  validations () {
    return {
      email: { required, minLength:minLength(3), email },
      password: { required, minLength:minLength(8), maxLength: maxLength(48),},
    }
  },

  methods:{
    checkForm(){
      this.v$.$validate()
      if(this.v$.$errors.length){
        console.log('Validation Failed...');
        console.log(this.v$.$errors);
        return false;
      }else{
        console.log('Validation confirmed!');
        console.log('Email: '+this.email);
        console.log('Password: '+this.password);

        //this.loginin();
      }
    },

    loginin(){
      this.axios.post('http://127.0.0.1:8000/api/auth/login',{
        email:this.email,
        password:this.password,
      }, )
          .then(res => {
            console.log(res);
            if(res.data.token){
              localStorage.setItem('user', JSON.stringify(res.data.user_info));
              localStorage.setItem('access-token', res.data.token);
              this.$router.push({ name:'user.personal'});
            }
          })
          .catch(error => {
            console.log(error);
          })

    },

    // isAuth(){
    //   this.axios.post('', )
    // }
  }
}
</script>

<style scoped>

</style>