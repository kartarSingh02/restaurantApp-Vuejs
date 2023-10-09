<template>
<div class="navbar">
    <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/add">Add restaurant</router-link>
        <router-link to="/update">Update restaurant</router-link>
    </div>
    <div class="side">
        <div class="profile">
            <p class="para">Hi,{{ name }}</p>
        </div>
        <div class="logout">
            <a href="#" v-on:click="logout">Logout</a>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name:'NavbarView',
    data(){
        return{
            name:''
        }
    },
    methods:{
        logout(){
            localStorage.clear();
            this.$router.push({ name: "LogIn" });
        }
    },
    mounted(){
        let user=localStorage.getItem('user-info');
        this.name=JSON.parse(user).name
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
.side{
    display: flex;
    flex-direction: row;
    align-items: center;
}

.profile p{
    color: white;
    padding: 4px;
    margin: 8px;
    font-size: 12px;
}

</style>