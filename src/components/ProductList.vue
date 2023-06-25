<template>
  <div>
    <h2>Products Listing</h2>
    <div>
      <ul v-if="getProductsList.length" class="product-list">
        <li v-for="product of getProductsList" :key="product.id">
          <div class="product-item">
            <div class="description-box">
              <p>
                <span> Title : </span>
                <b>{{ product.title }}</b>
              </p>
              <p>
                <span> Price :</span>
                <b>Rs. {{ product.price }}</b>
              </p>
            </div>
            <div>
              <a
                v-if="showDelete"
                href="javascript:void(0)"
                @click="deleteProduct(product.id)"
                >Remove</a
              >
            </div>
          </div>
        </li>
      </ul>
      <p v-else>No Products Found. Contact Admin to add products</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductList",
  props: ["showDelete"],
  computed: {
    getProductsList() {
      console.log(this.showDelete);
      return [...this.$store.getters.getProducts];
    },
  },
  methods: {
    deleteProduct(id) {
      if (!id) {
        return;
      }
      this.$store.dispatch("deleteProduct", id);
    },
  },
};
</script>

<style scoped>
.product-list li {
  display: block;
  margin-top: 2%;
}
.product-item {
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(144, 121, 121, 0.35) 0px 5px 15px;
  max-width: 60%;
  margin: auto;
  border-radius: 12px;
}

.product-item a {
  text-decoration: none;
  color: red;
}

.product-item > .description-box {
  width: 50%;
}

.product-item > .description-box p {
  display: flex;
  align-items: center;
}

.product-item > .description-box span {
  font-size: 18px;
  width: 15%;
  text-align: left;
}
.product-item > .description-box b {
  font-size: 22px;
}
</style>
