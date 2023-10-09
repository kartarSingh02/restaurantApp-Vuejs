<template>
<NavbarView/>
    <h1>This is our Add Page</h1>
</template>

<script>
import NavbarView from './NavbarView.vue';
export default {
    name:'AddView',
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