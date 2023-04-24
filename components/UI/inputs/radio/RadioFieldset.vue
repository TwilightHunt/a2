<template>
  <form class="radio-fieldset">
    <legend class="radio-fieldset__legend">{{ title }}</legend>
    <RadioItem
      v-for="input in inputs"
      :key="input.id"
      :input="input"
      @selectField="selectField"
      :selected="!!(checkedRadio?.id === input.id)"
    />
  </form>
</template>

<script>
import RadioItem from "./RadioItem.vue";
export default {
  props: {
    inputs: { type: Array, required: true },
    title: String,
    checkedRadio: Object,
  },
  methods: {
    //Check current radio
    selectField(input) {
      if (!input.disabled) {
        this.$emit("selectField", input.id);
      }
    },
  },
  components: {
    RadioItem,
  },
};
</script>

<style lang="scss" scoped>
.radio-fieldset__legend {
  margin-bottom: 2rem;
  font-size: 1.5rem;
  font-weight: 600;
}
</style>
