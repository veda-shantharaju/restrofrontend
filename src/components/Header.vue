<template>
    <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/add">Add restaurant</router-link>
        <!-- <router-link to="/update">Update restaurant</router-link> -->
        <a v-on:click='logout' href="#">Logout</a>
    </div>
</template>

<script>
export default {
    name: 'AppHeader', // Rename the component to follow the multi-word convention
    methods:{
        logout()
        {
            // console.warn("logout");
            localStorage.clear()
            this.$router.push({name:'Login'})
        }
    }
}
</script>
<style>
.nav{
    background-color: #333;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
}
.nav a{
    float: left;
    color: white;
    padding: 14px 16px;
    text-align: center;
    font-size: 17px;
    text-decoration: none;
    margin-right: 200px;
    margin-left: 200px;


}
.nav a:hover{
    background-color: gray;
}
</style>                
