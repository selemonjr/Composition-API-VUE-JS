import {reactive,readonly} from "vue";
const state = reactive ({
    counter:0,
    color:"blue",
});
const methods = {
    increase() {
        state.counter++
    },
    decrease() {
        state.counter--
    },
    setColor(val) {
        state.color = val
    }
};
const getters = {
    counterSquared() {
        return state.counter * state.counter
    }
}
export default {
    state:readonly(state), // readonly prevents us from changing the state in our store from outside the store//
    methods,
    getters,
}