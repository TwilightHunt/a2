<template>
  <span class="cross"></span>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.cross {
  display: block;
  position: relative;
  height: 18px;
  width: 18px;
  cursor: pointer;
  &:hover {
    &::after,
    &::before {
      background-color: #000;
    }
    &::after {
      -webkit-transform: rotate(135deg);
      -ms-transform: rotate(135deg);
      transform: rotate(135deg);
    }
    &::before {
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }
}
.cross::after,
.cross::before {
  content: "";
  display: inherit;
  width: 3px;
  height: 23px;
  background-color: var(--accent-color);
  position: absolute;
  transition: all 0.3s ease;
}

.cross::after {
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
.cross::before {
  -webkit-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
</style>
