<template>
  <div>
    <h1>Register</h1>
    <input v-model="email" type="email" name="email" placeholder="email" />
    <br />
    <input
      v-model="password"
      type="password"
      name="password"
      placeholder="password"
    />
    <br />
    <button @click="register">Register</button>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'

export default {
  name: "TabTrackerRegister",

  data() {
    return {
      email: "",
      password: ""
    };
  },

  mounted() {},

  methods: {
   async register() {

       const response = await axios.post('http://localhost:5000/register',{
           email:this.email,
           password:this.password
       })
       console.log(response.data);
    //   console.log(`you email: ${this.email} and your password ${this.password}`);
    }
  }
};
</script>

<style scoped></style>
