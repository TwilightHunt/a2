<template>
  <label class="container">
    <input type="checkbox" checked />
    <span class="checkmark"></span>
  </label>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  display: block;
  cursor: pointer;
  position: relative;
}
.container input {
  opacity: 0;
  cursor: pointer;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 1.8rem;
  width: 1.8rem;
  background-color: #fff;
  border-radius: 0.2rem;
  border: 1px solid var(--accent-color);
}

.container input:checked ~ .checkmark {
  background-color: var(--accent-color);
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.container input:checked ~ .checkmark:after {
  display: block;
}

.container .checkmark:after {
  left: 5px;
  top: 1px;
  width: 3px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
