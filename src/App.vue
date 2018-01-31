<template>
  <div>
    
   hello world, vue is awesome 8
   <router-view></router-view>
  </div>
</template>

<script>

// Imports the router variable form bootstrap.js
import { router } from './bootstrap.js';

export default {
  name: 'Githubapplication',

  router: router
}
</script>

<style>

</style>
