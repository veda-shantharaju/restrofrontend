<template>
    <div>
        <img class="logo" src="../assets/restro.jpg" />
        <h1>Login</h1>
        <div class="login">
            <input type="text" v-model="username" placeholder="Enter Username">
            <input type="password" v-model="password" placeholder="Enter Password">
            <button v-on:click="login">Login</button>
            <p>
                <!-- Use <router-link> directly in the template -->
                <router-link to="/signup">Signup</router-link>
            </p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'LoginForm',
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        async login() {
            try {
                let result = await axios.post("http://127.0.0.1:8000/users/login/", {
                    username: this.username,
                    password: this.password
                });
                // console.log(result);
                if (result.status === 200 && result.data) {
                    localStorage.setItem("user-info", JSON.stringify(result.data));
                    this.$router.push({ name: 'Home' });
                }
                
            } catch (error) {
                // console.error("Error:", error);
                if (error.response && error.response.status === 401) {
                    alert("Invalid username or password. Please try again.");
                } else {
                    alert("An error occurred while logging in. Please try again later.");
                }
            }
        }
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if (user) {
            this.$router.push({ name: 'Home' });
        }
    }
}
</script>
