<template>
  <div>
    <Composition/>
  </div>
</template>
<script>
import Composition from "./components/Composition.vue";
import store from "./store";
import {provide} from "vue";
export default {
  name:"App",
  setup() {
    provide("store",store)
  },
  components: {
    Composition,
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
