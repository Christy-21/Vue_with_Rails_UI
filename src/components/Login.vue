<template>
    <div class="login-container">
      <h2>Login</h2>
      <form @submit.prevent="login" class="login-form">
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username" required>
        </div>
        <div class="form-group">
        <label for="email">Email:</label>
        <input type="text" id="email" v-model="email" required>
      </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required>
        </div>
  
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
export default {
  name: 'LoginForm',
  data() {
    return {
      username: '',
      email: '',
      password: '',
    };
  },
  methods: {
    login() {
      const storedUser = JSON.parse(localStorage.getItem('user'));

      if (storedUser && this.email === storedUser.email && this.password === storedUser.password) {
        // Redirect to home page
        this.$router.push('/home');
      } else {
        alert('Invalid credentials');
      }
    },
  },
  created() {
    this.email = ''; // Reset the email property
  },
};
</script>

  
  <style scoped>
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-direction: column;
  }
  
  .login-form {
    border: 1px solid #ccc;
    padding: 20px;
    max-width: 400px;
    width: 100%;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input[type="text"],
  input[type="password"] {
    width: 100%;
    padding: 8px;
    font-size: 16px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
  
  button {
    display: block;
    width: 100%;
    padding: 8px;
    font-size: 16px;
    background-color: #4caf50;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  </style>
  