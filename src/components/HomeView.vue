<template>
<NavbarView/>
    <h1>All Restaurants</h1>
    <div class="table">
      <table class="table" border="1px"> 
      <tr class="theading">
        <td>Serial No</td>
        <td>Name</td>
        <td>Location</td>
        <td>Contact</td>
        <td>Actions</td>
      </tr>
        <tr v-for="item in restaurants" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.location }}</td>
        <td>{{ item.contact }}</td>
        <td><router-link :to="'/update/'+item.id" style="text-decoration: none;margin: 0;padding: 0; color:blue">Update
        </router-link></td>
        </tr>
      </table>
    </div>
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
h1{
  margin-top: 30px;
}
.table{
  margin-left: auto; 
  margin-right: auto;
  width: 700px;
  margin-top: 50px;
}
.theading td{
  font-weight: bold;
  background-color: brown;
  color: white;
}

</style>