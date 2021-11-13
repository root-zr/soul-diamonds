<template>
  <div>
    <router-link class="router-link" :to="path">
      <slot></slot>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "NavigationItem",
    props: {
      path: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style scoped>
  .router-link {
    color: rgba(254, 255, 255, 1);
    text-decoration: none;
  }
</style>
