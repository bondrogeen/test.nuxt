<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { useHead } from "#app";
// import { useAppStore } from "~/stores/AppStore";

// const appStore = useAppStore();

useHead({
  htmlAttrs: {
    // class: appStore.theme,
  },
});
</script>
