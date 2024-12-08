export default {
  bind(el, bindings, vnode) {
    const arg = bindings.arg;

    el.style[arg] = bindings.value;
  },

}
