<template>
  <img class="restLogo" src="../assets/restaurantIcon.jpg" />
  <h1 class="heading">SignUp</h1>
  <div class="register">
    <input type="text" v-model="name" placeholder="Enter Name" />
    <input type="email" v-model="email" placeholder="Enter Email" />
    <input type="password" v-model="password" placeholder="Enter Password" />
    <button v-on:click="signUp">SignUp</button>
    <p style="margin-top: 5px;"> Already an existing User ?
        <router-link to="/login">Login</router-link>
    </p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async signUp() {
      console.warn("data", this.name, this.email, this.password);
      let result = await axios.post("http://localhost:3000/users", {
        email: this.email,
        name: this.name,
        password: this.password,
      });
      console.warn(result);
      if (result.status === 201) {
        // alert("SignUp Successfull");
        localStorage.setItem("user-info", JSON.stringify(result.data));
        this.$router.push({name:'HomeView'})
      }
    },
  },
  mounted(){
    let user = localStorage.getItem('user-info')
    if(user){
        this.$router.push({name:'HomeView'})
    }
  }
};
</script>

<style>

</style>
