<template>
  <div>
    <button class="on">On</button>
    <button class="off">Off</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      enabled: false
    }
  }
}
</script>

<style scoped>
  button {
    border: none;
    padding: 5px 15px;
    cursor: pointer;
    margin-right: 20px;
    outline: none;
  }

  button:active {
    box-shadow: inset 1px 1px 2px rgba(0, 0, 0, .5);
  }

  .on.active {
    background: green;
    color: #fff;
  }

  .off.active {
    background: red;
    color: #fff;
  }
</style>
