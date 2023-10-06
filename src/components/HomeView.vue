<template>
    <h1>This is our Home Page</h1>
</template>

<script>
export default {
    name:'HomeView',
      mounted(){
    let user = localStorage.getItem('user-info')
    if(!user){
        this.$router.push({name:'SignUp'})
    }
  }
}
</script>