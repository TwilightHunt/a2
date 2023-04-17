<template>
  <label class="switch">
    <input type="checkbox" />
    <span class="slider"></span>
  </label>
</template>

<script></script>

<style lang="scss" scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 35px;
  height: 20px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  border: 2px solid #bababa;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  left: -1px;
  top: 0;
  background-color: #bababa;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 50%;
}

input:checked + .slider {
  border-color: var(--accent-color);
}
input:checked + .slider:before {
  background: var(--accent-color);
}

input:checked + .slider:before {
  -webkit-transform: translateX(17px);
  -ms-transform: translateX(17px);
  transform: translateX(17px);
}
</style>
