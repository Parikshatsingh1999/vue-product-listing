<template>
  <div>
    <form @submit="login" class="form">
      <h2>Login Admin</h2>
      <div>
        <div class="form-item">
          <input ref="username" type="text" id="username" />
          <label for="username"> Username</label>
        </div>
      </div>
      <div>
        <div class="form-item">
          <input ref="password" type="password" id="password" />
          <label for="password"> Password</label>
        </div>
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  methods: {
    login(event) {
      event.preventDefault();
      let username = this.$refs.username?.value;
      let password = this.$refs.password?.value;
      if (!username || !password) {
        alert("Please fill all values");
        return;
      }
      if (
        username == this.$store.state.username &&
        password == this.$store.state.password
      ) {
        this.$store.dispatch("userLoggedIn");
      } else {
        alert("Wrong credentials");
      }
    },
  },
};
</script>
