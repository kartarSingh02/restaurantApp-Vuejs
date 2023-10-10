<template>
<NavbarView/>
    <h1 style="margin-top:30px">Add your restaurants</h1>
    <form class="form" style="margin-top:50px">
      <input type="text" placeholder="name" name="name" v-model="restaurant.name"/>
      <input type="text" placeholder="location" name="location" v-model="restaurant.location"/>
      <input type="text" placeholder="contact" name="contact" v-model="restaurant.contact"/>
      <button type="button" v-on:click="add">Add</button>
    </form>
</template>

<script>
import NavbarView from './NavbarView.vue';
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
    add(){
      console.warn(this.restaurant.name,this.restaurant.location,this.restaurant.contact)
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