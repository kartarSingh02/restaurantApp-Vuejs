<template>
  <img class="restLogo" src="../assets/restaurantIcon.jpg" />
  <h1 class="heading">SignUp</h1>
  <div class="register">
    <p v-if="!nameIsValid" class="error">Please enter a valid name.</p>
    <input type="text" v-model="name" placeholder="Enter Name" />
    
    <p v-if="!emailIsValid" class="error">Please enter a valid email address.</p>
    <input type="email" v-model="email" placeholder="Enter Email" />
    
    <p v-if="!passwordIsValid" class="error">Please enter a valid password with minimum 8 charachter.</p>
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
      nameIsValid: true,
      emailIsValid: true,
      passwordIsValid: true,
    };
  },
  methods: {
    async signUp() {
      // Reset validation flags
      this.nameIsValid = true;
      this.emailIsValid = true;
      this.passwordIsValid = true;

      // Perform validation
      if (!this.name) {
        this.nameIsValid = false;
        return;
      }

      // Simple email validation, you can use a more complex regex if needed
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!emailPattern.test(this.email)) {
        this.emailIsValid = false;
        return;
      }

      // Password validation (you can add more rules)
      if (this.password.length < 8) {
        this.passwordIsValid = false;
        return;
      }

      try {
        let result = await axios.post("http://localhost:3000/users", {
          email: this.email,
          name: this.name,
          password: this.password,
        });

        if (result.status === 201) {
          localStorage.setItem("user-info", JSON.stringify(result.data));
          this.$router.push({ name: "HomeView" });
        }
      } catch (error) {
        console.error(error);
        // Handle server-side validation errors here if needed
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "HomeView" });
    }
  },
};
</script>

<style>
.error {
  color: red;
  font-size: 10px;
}
</style>
