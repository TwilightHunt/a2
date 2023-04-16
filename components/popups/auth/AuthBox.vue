<template>
  <div class="auth">
    <div class="auth-popup">
      <Cross class="auth-popup__cross" />
      <header class="auth-popup__header">{{ title }}</header>
      <div class="auth-popup__fields">
        <slot name="body"></slot>
      </div>
      <div class="auth-popup__offer">
        <Checkbox class="auth-popup__offer__checkbox" />
        <div class="auth-popup__offer__text">
          Я согласен с договором <a href="">оферты</a>
        </div>
      </div>
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup>
import Checkbox from "../../UI/inputs/Checkbox.vue";
import Cross from "../../UI/Cross.vue";

const props = defineProps({
  title: {
    required: true,
    type: String,
  },
});

const clickButton = () => {
  this.$refs.childComponent.doSomething();
};
</script>

<style lang="scss" scoped>
.auth {
  position: absolute;
  inset: 0;
  display: flex;
  background: rgba(0, 0, 0, 0.8);
}
.auth-popup {
  margin: auto;
  background-color: #fff;
  padding: 30px;
  max-width: 440px;
  flex: 1 1 100%;
  position: relative;
}
.auth-popup__header {
  color: #000;
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1.4;
  margin-bottom: 3rem;
  text-transform: uppercase;
}
.auth-popup__offer {
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
}
.auth-popup__offer__checkbox {
  margin-right: 1rem;
}

.auth-popup__cross {
  position: absolute;
  right: 10px;
  top: 10px;
}
.auth-popup__offer__text {
  font-size: 1.4rem;
  font-weight: 500;
  & a {
    color: var(--accent-color);
    font-size: inherit;
  }
}
</style>
