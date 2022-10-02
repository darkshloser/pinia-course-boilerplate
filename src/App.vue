<script setup>
import TheHeader from "@/components/TheHeader.vue";
import ProductCard from "@/components/ProductCard.vue";
import { useProductStore } from "@/stores/ProductStore";
import { useCartStore } from "@/stores/CartStore";
// import { storeToRefs } from "pinia";
// 'storeToRefs' creates a refs of any reactive property in pinia store state
// and it's not working if we need actions in store
// const { products } = storeToRefs(useProductStore());
const productStore = useProductStore();
const cartStore = useCartStore();
productStore.fill();
// const addToCart = (count, product) => {
//   count = parseInt(count);
//   // With this code we'll have only one mutation of state for selected number 'count' of products
//   cartStore.$patch((state) => {
//     for (let index = 0; index < count; index++) {
//       state.items.push(product);
//     }
//   });

//   // With this code we'll have multiple mutations of the stateto the Pinia store
//   // for (let index = 0; index < count; index++) {
//   //   cartStore.items.push(product);
//   // }
// };
</script>

<template>
  <div class="container">
    <TheHeader />
    <ul class="sm:flex flex-wrap lg:flex-nowrap gap-5">
      <ProductCard
        v-for="product in productStore.products"
        :key="product.name"
        :product="product"
        @addToCart="cartStore.addItems($event, product)"
      />
    </ul>
  </div>
</template>
