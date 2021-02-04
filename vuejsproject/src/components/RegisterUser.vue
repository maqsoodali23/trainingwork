<template>
  <div class="signupform">
      <form name="signupform">
      <h1>{{ title }}</h1>
      
      <div>
        <label for="name">Enter your First Name : </label>
        <input id="name" type="text" name="firstName" v-model="firstName">
      </div>
      <br>
      
      <div>
        <label for="lastname">Enter your Last Name : </label>
        <input id="lastname" type="text" name="lastName" v-model="lastName">
      </div>
      <br>
      
      <div>
        <label for="loginemail">Enter your Email : </label>
        <input id="loginemail" type="email" name="email" v-model="email">
      </div>
      <!-- <p>{{ email }} </p> -->
      <br>
      
      <div>
        <label for="password">Enter your Password : </label>
        <input id="password" type="text" name="password" v-model="password">
      </div>
      <br>
      
      <div>
        <label for="confirmpassword">Enter Password again : </label>
        <input id="confirmpassword" type="text" name="confirmpassword" v-model="confirmpassword">
      </div>
      <br>
      <br>
      <div>
        <button type="button" @click="handleSubmit">
          Regiser
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import UserService from '@/services/UserService.js';
export default {
    name: "RegisterUser",
    data: () => {
        return {
            title: "Welcome to user signup page",
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmpassword: ""
        }
    },
    methods : {
            handleSubmit(e){
                e.preventDefault()
                if (this.password.length > 0 && this.password === this.confirmpassword) {
                  let postData = {
                        "firstName": this.firstName,
                        "lastName": this.lastName,
                        "email": this.email,
                        "password": this.password
                  };
                  UserService.signup(postData)
                    // this.$http.post('http://localhost:8080/#/', {
                    //     firstName: this.firstName,
                    //     lastName: this.lastName,
                    //     email: this.email,
                    //     password: this.password
                    // })
                    .then(response => {
                      console.log(response);
                    })
                    .catch(function (error) {
                        console.error(error.response);
                    });
                } else {
                  alert("Password does not match")
                }
            }
        }
}
</script>

<style scoped>
    input {
        font-size: larger;
    }
    label {
      font-size: large;
    }
</style>
