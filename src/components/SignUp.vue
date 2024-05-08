<template>
    <img class="logo" src="../assets/restro.jpg" />
    <h1>Sign Up</h1>
    <div class="register">
        <input type="text" v-model="username" placeholder="Enter UserName">
        <input type="text" v-model="email" placeholder="Enter Email">
        <input type="text" v-model="first_name" placeholder="Enter first_name">
        <input type="text" v-model="last_name" placeholder="Enter last_name">
        <input type="password" v-model="password" placeholder="Enter Password">
        <button v-on:click="signUp">Sign Up</button>
        <p>
            <!-- Use <router-link> directly in the template -->
            <router-link to="/login">Login</router-link>
        </p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'SignUp',
    data() {
        return {
            username: '',
            email: '',
            password: '',
            first_name: '',
            last_name: ''
        }
    },
    methods: {
        async signUp() {
            try {
                let result = await axios.post("http://127.0.0.1:8000/users/api/register/", {
                    email: this.email,
                    username: this.username,
                    password: this.password,
                    first_name: this.first_name,
                    last_name: this.last_name
                });
                // console.log(result);
                if (result.status === 201) {
                    localStorage.setItem("user-info", JSON.stringify(result.data));
                    alert("Sign-up successful");
                }
                this.$router.push({ name: 'Home' });
            } catch (error) {
                // console.error("Error:", error);
                if (error.response && error.response.status === 400) {
                    alert("Invalid data. Please check your inputs and try again.");
                } else {
                    alert("An error occurred while signing up. Please try again later.");
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

<style>

</style>
