<script setup>
import { useProductsStore } from '@/stores/products';
import Link from './Link.vue'
import Logo from './Logo.vue'

const products = useProductsStore()
</script>

<template>
    <header class="px-5 md:px-10 py-5 bg-gray-700 top-0 w-full z-10 absolute">
      <nav class="flex flex-wrap items-end justify-between gap-2">
        <Logo/>
        <div class="flex gap-5 text-white">
          <h2 class="text-lg font-extrabold">Filtros:</h2>
          <div
            class="flex items-center gap-2"
            v-for="category in products.categories"
            :key="category.id"
            >
            <label class="text-gray-100">
            <input
              type="radio"
              name="category"
              :value="category.id"
              class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              :checked="products.selectedCategory === category.id"
              @change="products.selectedCategory = +$event.target.value"
              >
            {{ category.name }}</label>
          </div>
        </div>

        <Link
        to="sales"
        class="w-full text-center md:w-auto">
          Administrar
        </Link>
      </nav>
    </header>
</template>
