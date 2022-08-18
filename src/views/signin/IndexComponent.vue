<template>
  <section class="signin-page account">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-md-offset-3">
          <div class="block text-center">
            <h2 class="text-center">Create Your Account</h2>


            <div class="form-group">
              <input type="text" class="form-control" v-model="first_name" placeholder="First Name">
              <!-- error -->
              <div v-if="v$.first_name.$error" class="error-block text-left">
                <span class="text-danger"><i class="tf-ion-close-circled"></i>{{ v$.first_name.$errors[0].$message}}</span>
              </div>
            </div>
            <div class="form-group">
              <input type="text" class="form-control" v-model="last_name" placeholder="Last Name">
              <!-- error -->
              <div v-if="v$.last_name.$error" class="error-block text-left">
                <span class="text-danger"><i class="tf-ion-close-circled"></i>{{ v$.last_name.$errors[0].$message}}</span>
              </div>
            </div>
            <div class="form-group">
              <input type="text" class="form-control" v-model="login" placeholder="Login">
              <!-- error -->
              <div v-if="v$.login.$error" class="error-block text-left">
                <span class="text-danger"><i class="tf-ion-close-circled"></i>{{ v$.login.$errors[0].$message}}</span>
              </div>
            </div>
            <div class="form-group">
              <input type="email" class="form-control" v-model="email" placeholder="Email">
              <!-- error -->
              <div v-if="v$.email.$error" class="error-block text-left">
                <span class="text-danger"><i class="tf-ion-close-circled"></i>{{ v$.email.$errors[0].$message}}</span>
              </div>
            </div>
            <div class="form-group">
              <input type="date" class="form-control" v-model="birth_date">
              <!-- error -->
              <div v-if="v$.birth_date.$error" class="error-block text-left">
                <span class="text-danger"><i class="tf-ion-close-circled"></i>{{ v$.birth_date.$errors[0].$message}}</span>
              </div>
            </div>
            <div class="form-group">
              <input type="text" class="form-control" v-model="phone" placeholder="Phone">
              <div v-if="v$.phone.$error" class="error-block text-left">
                <span class="text-danger"><i class="tf-ion-close-circled"></i>{{ v$.phone.$errors[0].$message}}</span>
              </div>
            </div>
            <div class="form-group">
              <input type="password" class="form-control" v-model="password" placeholder="Password">
              <!-- error -->
              <div v-if="v$.password.$error" class="error-block text-left">
                <span class="text-danger"><i class="tf-ion-close-circled"></i>{{ v$.password.$errors[0].$message}}</span>
              </div>
            </div>
            <div class="form-group">
              <input type="password" class="form-control" v-model="confirmPass" placeholder="Password confirm">
              <!-- error -->
              <div v-if="v$.confirmPass.$error" class="error-block text-left">
                <span class="text-danger"><i class="tf-ion-close-circled"></i>{{ v$.confirmPass.$errors[0].$message}}</span>
              </div>
            </div>
            <div class="text-center">
              <button @click.prevent="checkForm" type="submit" class="btn btn-main text-center">Sign In</button>
            </div>

            <p class="mt-20">Already hava an account ?<router-link to=""> Login</router-link></p>
            <p><a href="#"> Forgot your password?</a></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, email, minLength, maxLength, sameAs,  } from '@vuelidate/validators'
export default {
  name: "IndexComponent",

  setup () {
    return { v$: useVuelidate() }
  },

  data(){
    return{
      login:null,
      first_name:null,
      last_name:null,
      birth_date:null,
      email:null,
      password:null,
      confirmPass:null,
      phone:null,

      errors:[],
    }
  },

  validations () {
    return {
        first_name: { required, minLength:minLength(3), maxLength: maxLength(24), },
        last_name: { required, minLength:minLength(3), maxLength: maxLength(24), },
        email: { required, minLength:minLength(3), email },
        login: { required, minLength:minLength(4),  maxLength: maxLength(24), },
        password: { required, minLength:minLength(8), maxLength: maxLength(48),},
        confirmPass: { required, minLength:minLength(8), maxLength: maxLength(48), sameAs: sameAs(this.password),},
        birth_date: {required, },
        phone: { required, minLength:minLength(11)},
    }
  },

  methods:{
    checkForm(){
      this.v$.$validate()
      if(this.v$.$errors.length){
        console.log('Validation Failed...');
        console.log(this.v$.$errors);
      }else{
        console.log('Validation confirmed!');
        console.log('First name: '+this.first_name);
        console.log('Last name: '+this.last_name);
        console.log('Login: '+this.login);
        console.log('Email: '+this.email);
        console.log('Phone: '+this.phone);
        console.log('Birthday: '+this.birth_date);
        console.log('Password: '+this.password);

        //this.signin();
      }
    },

    signin(){
      this.axios.post('',{
        'first_name':this.first_name,
        'last_name':this.last_name,
        'login':this.login,
        'email':this.email,
        'phone':this.phone,
        'birth_date':this.birth_date,
        'password':this.password,
      })
          .then(res => {
            console.log(res);
          })
          .catch(error => {
            console.log(error);
          })
    },

    // formatBirthDate(){
    //   console.log(this.birth_date);
    // }
  }
}
</script>

<style scoped>
ul.errors-list{
  margin-left: 0;
  padding-left: 0;
  list-style-position: inside;
}

.error-block{
  margin-top: 8px;
  padding-left: 2px;
  font-style: italic;
}

.alert-danger{
  margin-top: 8px;
}
</style>