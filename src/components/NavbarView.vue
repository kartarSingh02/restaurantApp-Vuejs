<template>
<div class="navbar">
    <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/add">Add restaurant</router-link>
        <router-link to="/update">Update restaurant</router-link>
    </div>
    <div class="logout">
        <a href="#" v-on:click="logout">Logout</a>
    </div>
</div>
</template>

<script>
export default {
    name:'NavbarView',
    methods:{
        logout(){
            localStorage.clear();
            this.$router.push({ name: "LogIn" });
        }
    }
}

</script>

<style>
.navbar{
    display: flex;
    background-color: brown;
    padding :0;
}
.navbar a{
    color: white;
    text-decoration: none;
    font-weight: bold;
    padding: 4px;
    margin:8px;
}

.navbar a:hover{
    background-color: white;
    color: brown;
    border-radius: 2px;
    padding:3px;
}
</style>