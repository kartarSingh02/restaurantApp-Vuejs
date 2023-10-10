<template>
<NavbarView/>
    <h1 style="margin-top:30px">Update restaurant details</h1>
    <form class="form" style="margin-top:50px">
      <label for="name">Name</label>
      <input type="text" placeholder="name" name="name" v-model="restaurant.name"/>
      <label for="name">Location</label>
      <input type="text" placeholder="location" name="location" v-model="restaurant.location"/>
      <label for="name">Contact</label>
      <input type="text" placeholder="contact" name="contact" v-model="restaurant.contact"/>
      <button type="button" v-on:click="update">Update</button>
    </form>
</template>

<script>
import axios from 'axios';
import NavbarView from './NavbarView.vue';
export default {
    name:'UpdateView',
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
      async update(){
      // console.warn(this.restaurant.name,this.restaurant.location,this.restaurant.contact)
        try {
        let result = await axios.put("http://localhost:3000/restaurants/" + this.$route.params.id, {
          name: this.restaurant.name,
          location: this.restaurant.location,
          contact: this.restaurant.contact,
        });
        console.log(result)
        if (result.status === 200) {
          this.$router.push({ name: "HomeView" });
        }
      } catch (error) {
        console.error(error);
        // Handle server-side validation errors here if needed
      }
    }
    }, 
    async mounted(){
    let user = localStorage.getItem('user-info')
    if(!user){
        this.$router.push({name:'SignUp'})
    }
    const result = await axios.get("http://localhost:3000/restaurants/"+ this.$route.params.id);
    console.log(result)
    this.restaurant=result.data;
  }
}
</script>