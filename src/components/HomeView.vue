<template>
<NavbarView/>
    <h1>This is our Home Page</h1>

      <table class="table"> 
      <tr class="theading">
        <td>Serial No</td>
        <td>Name</td>
        <td>Location</td>
        <td>Contact</td>
      </tr>
        <tr v-for="item in restaurants" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.location }}</td>
        <td>{{ item.contact }}</td>
        </tr>
      </table>
</template>

<script>
import NavbarView from './NavbarView.vue';
import axios from 'axios';
export default {
    name:'HomeView',
    components:{
      NavbarView,
    },
    data(){
      return{
        restaurants:[]
      }
    },
    async mounted(){
    let user = localStorage.getItem('user-info')
    if(!user){
        this.$router.push({name:'SignUp'})
    }
    let result = await axios.get("http://localhost:3000/restaurants");
    console.warn(result.data);
    this.restaurants=result.data;
  }
}
</script>

<style>

.table{
  margin-left: auto; 
  margin-right: auto;
  width: 500px;
  margin-top: 30px;
  border: 1px brown;
}
.theading td{
  font-weight: bold;
  background-color: brown;
  color: white;
}

td tr{
  border:1px brown
}
</style>