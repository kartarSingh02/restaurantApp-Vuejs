<template>
<NavbarView/>
    <h1 style="margin-top:30px">Add your restaurants</h1>
    <form class="form" style="margin-top:50px">
      <label for="name">Name</label>
      <input type="text" placeholder="name" name="name" v-model="restaurant.name"/>
      <label for="name">Location</label>
      <input type="text" placeholder="location" name="location" v-model="restaurant.location"/>
      <label for="name">Contact</label>
      <input type="text" placeholder="contact" name="contact" v-model="restaurant.contact"/>
      <button type="button" v-on:click="add">Add</button>
    </form>
</template>

<script>
import NavbarView from './NavbarView.vue';
import axios from 'axios';
export default {
    name:'AddView',
    components:{
      NavbarView,
    },
    data(){
      return{
        restaurant:{
          name:'',
          location:'',
          contact:''
        }
      }
    }, 
    methods:{
    async add(){
      // console.warn(this.restaurant.name,this.restaurant.location,this.restaurant.contact)
        try {
        let result = await axios.post("http://localhost:3000/restaurants", {
          name: this.restaurant.name,
          location: this.restaurant.location,
          contact: this.restaurant.contact,
        });
        console.log(result)
        // Empying the input fieds after pushin to db
        this.restaurant.name='';
        this.restaurant.location='';
         this.restaurant.contact='';

        // if (result.status === 201) {
        //   localStorage.setItem("user-info", JSON.stringify(result.data));
        //   this.$router.push({ name: "HomeView" });
        // }
      } catch (error) {
        console.error(error);
        // Handle server-side validation errors here if needed
      }
    }
    },
    mounted(){
    let user = localStorage.getItem('user-info')
    if(!user){
        this.$router.push({name:'SignUp'})
    }
  }
}
</script>

<style>
.form label{
  font-weight: bold;

}
</style>