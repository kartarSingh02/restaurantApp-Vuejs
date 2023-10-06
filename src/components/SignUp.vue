<template>
    <img class="restLogo" src="../assets/restaurantIcon.jpg"/>
    <h1 class="heading">SignUp</h1>
    <div class="register">
        <input type="text" v-model="name" placeholder="Enter Name"/>
        <input type="email" v-model="email" placeholder="Enter Email"/>
        <input type="password" v-model="password" placeholder="Enter Password"/>
        <button v-on:click="signUp">Submit</button>
    </div>

</template>

<script>
import axios from 'axios';
    export default {
        name:'SignUp',
        data(){
            return{
                name:"",
                email:"",
                password:""
            }
        },
        methods:{
            async signUp(){
                console.warn("data",this.name,this.email,this.password);
                let result = await axios.post("http://localhost:3000/users",{
                    email:this.email,
                    name:this.name,
                    password:this.password,
                });
                console.warn(result);
                if(result.status===201){
                    alert("SignUp Successfull")
                }
                localStorage.setItem("user-info",JSON.stringify(result.data))
            }
        }
    }
</script>

<style>
.restLogo{
    width: 100px;
    margin-top: 50px;
}

.heading{
    color: brown;
    margin-bottom: 20px;
}

.register input {
    display: block;
    width: 300px;
    height: 40px;
    margin-bottom: 20px;
    border: 2px solid brown;
    margin-left: auto;
    margin-right: auto;
    padding-left: 15px;
    border-radius: 5px;
}


.register button {
    width: 100px;
    height: 40px;
    border: none;
    border-radius: 5px;
    background-color: brown;
    color: white;
    cursor: pointer;
}

.register button:hover{
    background-color: rgb(169, 71, 71);
}
</style>
