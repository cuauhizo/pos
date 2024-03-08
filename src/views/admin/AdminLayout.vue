<script setup>
  import AdminNav from '@/components/AdminNav.vue'
</script>

<template>
  <AdminNav/>
    <div class="pt-40 md:pt-28 container px-4 mx-auto lg:min-h-screen">
      <RouterView/>
    </div>
</template>
