<template>
    <img class="restLogo" src="../assets/restaurantIcon.jpg" />
  <h1 class="heading">Log In</h1>
  <div class="login">
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
        name:'LogIn',
        data(){
            return{
                email:'',
                password:''
            }
        },
        methods:{
            async login(){
                let result = await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`, {
                });
                console.warn(result);
                if (result.status === 200 && result.data.length > 0) {
                    // alert("SignUp Successfull");
                    localStorage.setItem("user-info", JSON.stringify(result.data[0]));
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
        }
</script>