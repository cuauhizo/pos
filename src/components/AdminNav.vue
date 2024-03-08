<script setup>
import { RouterLink } from 'vue-router'
import Link from './Link.vue'
import Logo from './Logo.vue'

function toggleMenu() {
  const navToggle = document.getElementsByClassName("toggle");
  for (let i = 0; i < navToggle.length; i++) {
    navToggle.item(i).classList.toggle("hidden");
  }
};

</script>

<template>
  <header class="px-5 md:px-10 py-5 bg-gray-700 top-0 w-full z-10">
    <nav class="flex flex-wrap items-end justify-between gap-2">
      <Logo/>
      <div class="flex md:hidden">
        <button id="hamburger" @click="toggleMenu">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="toggle block w-8 h-8 text-white">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="toggle hidden w-8 h-8 text-white">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="toggle hidden w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 md:border-none">
        <RouterLink
          :to="{ name:'products' }"
          class="block md:inline-block rounded text-white font-bold p-2"
        >
          Productos
        </RouterLink>
        <RouterLink
          :to="{ name:'sales' }"  
          class="block md:inline-block rounded text-white font-bold p-2"
        >
          Ventas
        </RouterLink>
      </div>
      <Link
        to="shop"
        class="w-full text-center md:w-auto">
        Ir a Tienda
      </Link>
    </nav>
  </header>
</template>