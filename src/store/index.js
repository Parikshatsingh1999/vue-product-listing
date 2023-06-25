import { createStore } from "vuex";
import router from "@/router";
import { Products } from "./products";
console.log(localStorage.getItem("productList"));
export default createStore({
  state: {
    userLoggedIn: localStorage.getItem("userLogedIn") == "true" ?? false,
    username: "admin",
    password: "password",
    products: JSON.parse(localStorage.getItem("productList")) || Products
  },
  getters: {
    getProducts(state) {
      return state.products || [];
    }
  },
  mutations: {
    setLogin(state, value) {
      state.userLoggedIn = !!value;
      localStorage.setItem("userLogedIn", state.userLoggedIn);
    },
    setProduct(state, value) {
      let newProduct = value;
      state.products = value;
      localStorage.setItem("productList", JSON.stringify(state.products))
    }
  },
  actions: {
    userLoggedIn({ commit }) {
      commit("setLogin", true);
      router.push("/admin");
    },
    userLoggedOut({ commit }) {
      commit("setLogin", false);
      router.push("/");
    },
    addNewProduct({ commit, state }, data) {
      if (!data?.title || !data?.price) {
        console.warn("Not all fields provided")
        return;
      }
      let lastId = state.products[state.products.length - 1]?.id || 0;
      data.id = lastId + 1;
      data.title = data.title.replace(data.title[0], data.title[0].toUpperCase());
      let newList = [...state.products, data];
      commit("setProduct", newList);
    },
    deleteProduct({ commit, state }, id) {
      let newList = state.products.filter(product => product.id != id);
      if (newList.length === state.products.length) {
        console.warn("Product with given Id not found");
        return;
      }
      commit("setProduct", newList);
    }
  },
  modules: {},
});
