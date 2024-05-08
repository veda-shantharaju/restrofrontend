<template>
  <div>
    <Header />
    <h1>Hello {{ name }}, Welcome to the Home Page</h1>
  </div>
  <table border="1">
    <tr :class="{ 'header-row': index % 2 !== 0 }">
      <td>ID</td>
      <td>NAME</td>
      <td>ADDRESS</td>
      <td>PHONE</td>
      <td>ACTIONS</td>
    </tr>
    <tr v-for="item in restaurant" :key="item.id" :class="{ 'alternate-row': index % 2 !== 0 }">
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.address }}</td>
      <td>{{ item.phone }}</td>
      <td>
        <router-link :to="'/update/' + item.id">Update</router-link>
        <button v-on:click="deleterestro(item.id)">delete</button>
      </td>
    </tr>
  </table>
</template>

<script>
import Header from './Header.vue'
import axios from 'axios';
export default {
  name: 'HomePage',
  data() {
    return {
      name: '',
      restaurant: [],
    }
  },
  components: {
    Header  // Registering the Header component 
  },
  methods: {
    async deleterestro(id) {
      console.warn(id)
      const result = await axios.delete(`http://127.0.0.1:8000/common/deleterestro/?id=${id}`);
      if (result.status === 200) {
      window.location.reload();
    }
    }
  },
  async mounted() {
    let user = localStorage.getItem('user-info');
    this.name = JSON.parse(user).name;
    if (!user) {
      this.$router.push({ name: 'SignUp' });
    }
    let result = await axios.get("http://127.0.0.1:8000/common/restrolist/");
    // console.warn(result.data)
    this.restaurant = result.data.results;
    // console.warn(result.data.results)
  }
}
</script>

<style>
td {
  width: 200px;
  height: 40px;
}

table {
  margin: 0 auto;
  /* Set left and right margins to auto */
}

.container {
  display: flex;
  justify-content: center;
  /* Horizontally center the table */
  align-items: center;
  /* Vertically center the table */
  height: 100vh;
  /* Set a fixed height for the container */
}

.alternate-row {
  background-color: lightgray;
  /* Set the background color for alternate rows */
}

.header-row {
  background-color: rgb(192, 219, 243);
  /* Set the background color for alternate rows */
}
</style>
