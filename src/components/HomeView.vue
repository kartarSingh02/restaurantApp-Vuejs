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
        </router-link>
        <button type="button" v-on:click="deleteRestaurant(item.id)" class="delete">Delete</button>
        </td>
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
    methods:{
      async deleteRestaurant(id){
        // console.warn(id)
        let result = await axios.delete("http://localhost:3000/restaurants/" + id);
        console.log(result);
        if(result.status==200){
          this.loadData();
        }
      },
      async loadData(){
        let user = localStorage.getItem('user-info')
        if(!user){
            this.$router.push({name:'SignUp'})
        }
        let result = await axios.get("http://localhost:3000/restaurants");
        console.warn(result.data);
        this.restaurants=result.data;
      }
    },
    mounted(){
      this.loadData();
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

.table .delete{
  background-color: red;
  color: white;
  box-shadow: none;
  border-radius: 5px;
  padding: 4px;
  margin-left:10px
}

</style>