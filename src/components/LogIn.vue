<template>
  <img class="restLogo" src="../assets/restaurantIcon.jpg" />
  <h1 class="heading">Log In</h1>
  <div class="login">
    <p v-if="showWrongCredentials" class="error-message">Wrong Credentials</p>
    <input type="email" v-model="email" placeholder="Enter Email" />
    <input type="password" v-model="password" placeholder="Enter Password" />
    <button v-on:click="login">LogIn</button>
    <p style="margin-top: 5px;"> Didn't have an account ?
      <router-link to="/signUp">Signup</router-link>
    </p>
    
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'LogIn',
  data() {
    return {
      email: '',
      password: '',
      showWrongCredentials: false, // Flag to control the error message display
    };
  },
  methods: {
    async login() {
      let result = await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`);
      console.warn(result);

      if (result.status === 200 && result.data.length > 0) {
        localStorage.setItem("user-info", JSON.stringify(result.data[0]));
        this.$router.push({ name: 'HomeView' });
      } else {
        // Show "Wrong Credentials" message when login fails
        this.showWrongCredentials = true;
      }
    },
  },
  mounted() {
    let user = localStorage.getItem('user-info');
    if (user) {
      this.$router.push({ name: 'HomeView' });
    }
  },
};
</script>

<style>
.error-message {
  color: red;
  font-weight: bold;
}
</style>
