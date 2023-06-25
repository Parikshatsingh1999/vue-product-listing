import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import AdminView from "../views/AdminView.vue"
import store from "../store/index";


const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },

  {
    path: "/admin",
    name: "admin",
    component: AdminView,
  },

  {
    path: "/login",
    name: "login",
    component: LoginView,
  },

];



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path === "/admin" && !store.state.userLoggedIn) {
    next("/login")
  }
  next()
})

export default router;
