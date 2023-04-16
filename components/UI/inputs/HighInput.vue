<template>
  <div class="input-high">
    <label class="input-high__label" for="">{{ label }}</label>
    <input
      class="input-high__input"
      :type="password ? 'password' : 'text'"
      :placeholder="placeholder"
      :value="value"
      @input="updateValue"
    />
  </div>
</template>

<script>
export default {
  props: {
    password: Boolean,
    value: String,
    label: {
      type: String,
      required: true,
    },
    placeholder: {
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
.input-high {
  display: flex;
  flex-direction: column;
}
.input-high__label {
  color: #000;
  font-size: 1.4rem;
  font-weight: 500;
  margin-top: 0.7rem !important;
  margin: 0 1.5rem 0 0;
  max-width: 12rem;
  padding: 0;
}
.input-high__input {
  padding: 10px 13px;
  border: 0.1rem solid #e1e1e3;
  border-radius: 0.3rem;
  color: #222;
  box-shadow: none;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.1;
}
</style>
