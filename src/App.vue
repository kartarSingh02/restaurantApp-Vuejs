<template>
<router-view/>
</template>

<script>

export default {
  name: 'App',

}
</script>

<style>
#app{
  text-align: center;
}

.restLogo {
  width: 100px;
  margin-top: 50px;
}

.heading {
  color: brown;
  margin-bottom: 20px;
}

.register input, .login input {
  display: block;
  width: 300px;
  height: 40px;
  margin-bottom: 10px;
  border: 2px solid brown;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  border-radius: 5px;
}

.register button, .login button {
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 5px;
  background-color: brown;
  color: white;
  cursor: pointer;
}

.register button:hover, .login button:hover {
  background-color: rgb(169, 71, 71);
}
</style>
