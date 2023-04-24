<template>
  <div class="input-high">
    <label class="input-high__label" for="">{{ label }}</label>
    <input
      class="input-high__input"
      :type="password && !showPassword ? 'password' : 'text'"
      :placeholder="placeholder"
      :value="value"
      @input="updateValue"
    />
    <div v-if="password" class="input-high__icon">
      <font-awesome-icon
        v-if="showPassword"
        icon="fa-solid fa-eye-slash"
        style="color: #000000"
        @click="setPasswordVisibility(false)"
      />
      <font-awesome-icon
        v-else
        icon="fa-solid fa-eye"
        style="color: #000000"
        @click="setPasswordVisibility(true)"
      />
    </div>
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
      showPassword: false,
    };
  },
  methods: {
    updateValue(event) {
      this.$emit("input", event.target.value);
    },
    setPasswordVisibility(state) {
      this.showPassword = state;
    },
  },
};
</script>

<style lang="scss" scoped>
.input-high {
  display: flex;
  flex-direction: column;
  position: relative;
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
  &[type="password"] {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    letter-spacing: 0.125em;
    &::placeholder {
      letter-spacing: initial;
      font-family: Montserrat, Helvetica, Arial, sans-serif;
    }
  }
}
.input-high__icon {
  position: absolute;
  top: 50%;
  right: 25px;
  transform: translateY(50%);
  cursor: pointer;
}
</style>
