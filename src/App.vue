<script setup>
import TheHeader from "@/components/TheHeader.vue";
import ProductCard from "@/components/ProductCard.vue";
import { useProductStore } from "@/stores/ProductStore";
// import { storeToRefs } from "pinia";
// 'storeToRefs' creates a refs of any reactive property in pinia store state
// and it's not working if we need actions in store
// const { products } = storeToRefs(useProductStore());
const productStore = useProductStore();
productStore.fill();
</script>

<template>
  <div class="container">
    <TheHeader />
    <ul class="sm:flex flex-wrap lg:flex-nowrap gap-5">
      <ProductCard
        v-for="product in productStore.products"
        :key="product.name"
        :product="product"
      />
    </ul>
  </div>
</template>
