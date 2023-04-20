<template>
  <div class="one-line-input">
    <label class="input-high__label" for="">{{ label }}</label>
    <input class="input-high__input" :value="value" @input="updateValue" />
  </div>
</template>

<script>
export default {
  props: {
    value: String,
    label: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      content: this.value,
    };
  },
  methods: {
    updateValue(event) {
      this.$emit("input", event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.one-line-input {
  display: flex;
  justify-content: space-between;
}
.input-high__label {
  color: #000;
  font-size: 1.4rem;
  font-weight: 600;
  flex: 0 0 9rem;
  margin-bottom: 0;
  margin-right: 1rem;
  margin-top: 0.7rem;
  max-width: 13rem;
}
.input-high__input {
  padding: 9px 13px;
  border: 0.1rem solid #e1e1e3;
  border-radius: 0.3rem;
  color: #222;
  box-shadow: none;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.1;
  transition: all 0.3s ease;
  flex: 1 0 auto;
  &:focus {
    border-color: var(--accent-color);
  }
}
</style>
