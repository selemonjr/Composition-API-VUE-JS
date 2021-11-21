<template>
<div class="counter" :style="{color: store.state.color}">
  <h1>{{store.state.counter}}</h1>
  </div>
  <div>
    {{store.state.counter}}
    <sup>2</sup> = 
    {{store.getters.counterSquared()}}
  </div>
  <button @click="store.methods.increase">Increase</button>
   <button @click="store.methods.decrease">Decrease</button>
  <div class="input">
     <input type="text" placeholder="Enter Color Code" v-model="store.state.color">
  </div>
</template>
<script>
import {inject} from "vue";
export default {
  name:"Composition",
  setup() {
    const store = inject('store');
    // const counter = ref(0)
    // const increase = () => {
    //   return counter.value++
    // }
    // const decrease = () => {
    //    return counter.value--
    // }
    return {
      // counter
      // increase,
      // decrease,
      store
    }
  }
}
</script>
<style scoped>
button {
  margin-top:1%;
}
.input {
  margin:20px 0 0 0;
}
</style>
