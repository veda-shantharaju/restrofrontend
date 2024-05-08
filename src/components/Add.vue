<template>
    <div>
        <Header />
        <h1>Hello User, Welcome to the Add restaurant Page</h1>
    </div>
    <form class="add">
        <input type="text" name="name" placeholder="Enter Name" v-model="restaurant.name"/>
        <input type="text" name="address" placeholder="Enter Address" v-model="restaurant.address"/>
        <input type="text" name="phone" placeholder="Enter Phone" v-model="restaurant.phone"/>
        <button type="button" v-on:click="addRestaurant">Add New Restaurant</button>
    </form>
</template>

<script>
import Header from './Header.vue'
import axios from 'axios'
export default {
    name: 'AddRestaurant', // Renamed to follow the multi-word naming convention
    components: {
        Header  // Registering the Header component
    },
    data() {
        return {
            restaurant: {
                name: '',
                address: '',
                phone: ''
            }
        }
    },
    methods:{
        async addRestaurant(){
            // console.warn(this.restaurant)
            const result = await axios.post("http://127.0.0.1:8000/common/addrestro/",{
                name:this.restaurant.name,
                address:this.restaurant.address,
                phone:this.restaurant.phone,
            });
            if (result.status==201)
            {
                this.$router.push({name:'Home'})
            }
            // console.warn(result)
        }
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if (!user) {
            this.$router.push({ name: 'SignUp' });
        }
    }
}
</script>
