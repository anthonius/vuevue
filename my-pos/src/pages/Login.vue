<template>
  <div>
    <center>
      Username : <input type="text" v-model="username"> {{username}} <br />
      Password : <input type="password" v-model="password"> {{password}}
      <br />
      {{myLoginData}}

      <button @click="login" class="dodol">Login</button>
    </center>
    <!--
    <button @click="login()" class="dodol">Login1</button>
    <button v-on:click="login" class="dodol">Login2</button>
    -->
  </div>
</template>

<style scoped>
  .dodol {
    background-color: red;
  }
</style>

<script>
  export default {
    data () {
      return {
        username: '',
        password: ''
      }
    },
    computed: {
      myLoginData: function () {
        return this.username + ' - ' + this.password
      }
    },
    watch: { // reactivity <-- obj is being watched
      myLoginData: function (newVal, oldVal) {
        if (newVal === 'hore - a') {
          alert(newVal)
        }
      }
    },
    methods: {
      login () {
        this.$router.push('/dashboard')
      }
    }
  }
</script>
