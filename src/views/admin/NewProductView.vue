<script setup>
import Link from "@/components/Link.vue";
</script>

<template>
  <div>
    <Link to="products"> Volver </Link>
    <h1 class="text-4xl font-black my-10">Nuevo Producto</h1>

    <div class="flex justify-center bg-white shadow">
      <div class="mt-10 p-10 w-full 2xl:w-2/4">
        <FormKit type="form" submit-label="Agregar Producto">
          <FormKit
            type="text"
            label="Nombre"
            name="name"
            placeholder="Nombre del Producto"
            validation="required"
            :validation-messages="{
              required: 'El Nombre del producto es obligatorio',
            }"
          ></FormKit>

          <FormKit
            type="file"
            label="Imegen del producto"
            name="image"
            validation="required"
            :validation-messages="{
              required: 'La imagen del producto es obligatorio',
            }"
            accept=".jpg"
          ></FormKit>

          <FormKit
            type="select"
            label="Categoría"
            name="category"
            validation="required"
            :validation-messages="{
              required: 'La categoría es obligatorio',
            }"
            :options="[1,2,3]"
          ></FormKit>

          <FormKit
            type="number"
            label="Precio"
            name="price"
            placeholder="Precio del producto"
            validation="required"
            :validation-messages="{
              required: 'El precio es obligatorio',
            }"
            min="1"
          ></FormKit>

          <FormKit
            type="number"
            label="Disponibles"
            name="availability"
            placeholder="Cantidad disponible"
            validation="required"
            :validation-messages="{
              required: 'La cantidad es obligatorio',
            }"
            min="1"
          ></FormKit>
        </FormKit>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
