import Home from "./components/Home.vue"
import SignUp from "./components/SignUp.vue"
import { createRouter, createWebHistory } from 'vue-router'
import Login from "./components/Login.vue"
import Add from "./components/Add.vue"
import Update from "./components/Update.vue"


const routes = [
    {
        name: "Home",
        component: Home,
        path: '/'
    },
    {
        name: "SignUp",
        component: SignUp,
        path: '/signup'
    },
    {
        name: "Login",
        component: Login,
        path: '/login'
    },
    {
        name: "Add",
        component: Add,
        path: '/add' // Example path for Add component
    },
    {
        name: "Update",
        component: Update,
        path: '/update/:id' // Example path for Update component
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes // Pass the routes array here
})

export default router
