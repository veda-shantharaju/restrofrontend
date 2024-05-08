<template>
  <div>
    <Header />
    <h1>Hello User, Welcome to the Update restaurant Page</h1>
  </div>
  <form class="add">
    <input type="text" name="name" placeholder="Enter Name" v-model="restaurant.name" />
    <input type="text" name="address" placeholder="Enter Address" v-model="restaurant.address" />
    <input type="text" name="phone" placeholder="Enter Phone" v-model="restaurant.phone" />
    <button type="button" v-on:click="updateRestaurant">Update Restaurant</button>
  </form>
</template>

<script>
import Header from './Header.vue'
import axios from 'axios'
export default {
  name: 'UpdateRestaurant', // Renamed to follow the multi-word naming convention
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
  methods: {
    async updateRestaurant() {
      // console.warn(this.restaurant)
      const url = `http://127.0.0.1:8000/common/updaterestro/?id=${this.$route.params.id}`;
      const result = await axios.post(url, this.restaurant);
      if (result.status == 200) {
        this.$router.push({ name: 'Home' })
      }
      // console.warn(result)
    }
  },

  async mounted() {
    let user = localStorage.getItem('user-info');
    if (!user) {
      this.$router.push({ name: 'SignUp' });
    }
    const result = await axios.get("http://127.0.0.1:8000/common/restrolist/", {
      params: {
        id: this.$route.params.id
      }
    });
    this.restaurant = result.data.results[0];
    // console.warn(this.restaurant);
    // console.warn(result.data.results[0].name)
  }
}
</script>
