<template>
  <div class="loginform">
    <form name="loginform">
      <h1>{{ title }}</h1>
      <div>
        <label for="loginemail">Enter your Email : </label>
        <input id="loginemail" type="email" name="email" v-model="email">
      </div>
      <br>
      
      <div>
        <label for="password">Enter your Password : </label>
        <input id="password" type="text" name="password" v-model="password">
      </div>
      <br>
      
      <br>
      <div>
        <button type="button" @click="handleLogin">
          Login
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import UserService from '@/services/UserService.js';
export default {
    name: "LoginUser",
    data: () => {
        return {
            title: "Welcome to user login page",
            email: "",
            password: ""
        }
    },
    methods : {
            handleLogin(e){
                e.preventDefault()
                if (this.password.length > 0) {
                  let postData = {
                        "email": this.email,
                        "password": this.password
                  };
                  UserService.login(postData)
                    .then(response => {
                      console.log(response);
                    })
                    .catch(function (error) {
                        console.error(error.response);
                    });
                } else {
                  alert("Password is empty!")
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
