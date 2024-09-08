<template>
  <div style="border: 1px solid black;">
    我是HelloWorld.vue
    <top />
    <index />
    <router-link to="/test">GOTEST</router-link>
  </div>
</template>

<script>

import Top from '../components/01.top.vue';
import Index from '../components/02.index.vue';

export default {
  components:{
    Top,
    Index
  }
}
</script>

<style>

</style>
