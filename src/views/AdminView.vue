<template>
  <div class="add-product">
    <form @submit="addProduct" class="form">
      <h2>Add product</h2>
      <div>
        <div class="form-item">
          <input type="text" ref="productTitle" id="title" />
          <label for="title"> Product Title</label>
        </div>
      </div>
      <div>
        <div class="form-item">
          <input type="text" ref="productPrice" id="price" />
          <label for="price"> Product Price</label>
        </div>
      </div>
      <button type="submit">Add product</button>
    </form>
  </div>
  <ProductList :showDelete="true" />
</template>

<script>
import ProductList from "@/components/ProductList.vue";
export default {
  name: "AdminView",
  components: {
    ProductList,
  },
  methods: {
    addProduct(event) {
      event.preventDefault();
      let title = this.$refs.productTitle;
      let price = this.$refs.productPrice;
      if (!title?.value || !price?.value || !Number(price.value)) {
        alert("Fill all details with valid entries");
        return;
      }
      this.$store.dispatch("addNewProduct", {
        title: title.value,
        price: Number(price.value),
      });
      title.value = null;
      price.value = null;
    },
  },
};
</script>
