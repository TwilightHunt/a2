<template>
  <div class="checkbox-field">
    <Checkbox class="checkbox-field__checkbox" />
    <div class="checkbox-field__text">
      {{ text }}
    </div>
    <Info class="checkbox-field__info" :text="info" />
  </div>
</template>

<script>
import Checkbox from "./inputs/Checkbox.vue";
import Info from "./Info.vue";
export default {
  props: {
    text: String,
    info: String,
  },
  components: {
    Checkbox,
    Info,
  },
};
</script>

<style lang="scss" scoped>
.checkbox-field {
  display: flex;
  max-width: 37rem;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
}
.checkbox-field__text {
  font-size: 1.2rem;
  font-weight: 500;
  color: #000;
}
.checkbox-field__info {
  margin-left: auto;
}
.checkbox-field__checkbox {
  margin-right: 10px;
}
</style>
