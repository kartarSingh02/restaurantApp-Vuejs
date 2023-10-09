<template>
<NavbarView/>
    <h1>This is our Update Page</h1>
</template>

<script>
import NavbarView from './NavbarView.vue';
export default {
    name:'UpdateView',
    components:{
      NavbarView,
    },
    mounted(){
    let user = localStorage.getItem('user-info')
    if(!user){
        this.$router.push({name:'SignUp'})
    }
  }
}
</script>