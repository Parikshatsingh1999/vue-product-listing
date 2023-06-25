<template>
  <!-- <nav>
  
   
  </nav> -->
  <nav>
    <router-link to="/">Home</router-link> |

    <router-link to="/admin">Admin </router-link>
    |
    <a v-if="showLogOut" href="javascript:void(0)" @click="logOut"> LogOut</a>
    <router-link v-else to="/login">login </router-link>
  </nav>
  <router-view />
</template>

<script>
export default {
  computed: {
    showLogOut() {
      return !!this.$store.state?.userLoggedIn;
    },
  },
  methods: {
    logOut() {
      this.$store.dispatch("userLoggedOut");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.form {
  padding: 2%;
  background-color: azure;
  max-width: 40%;
  margin: auto;
}
.form input {
  padding: 1%;
  font-size: 18px;
  margin-right: 5%;
}
.form label {
  font-size: 16px;
  font-weight: bold;
  width: 30%;
  text-align: left;
}

.form > div {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 2%;
}

.form .form-item {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}

.form button[type="submit"] {
  margin-top: 4%;
  padding: 1% 2%;
  background-color: black;
  color: white;
  border: none;
  outline: none;
}
</style>
