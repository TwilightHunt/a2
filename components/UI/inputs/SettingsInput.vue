<template>
  <div class="setting-input">
    <label class="setting-input__label">{{ label }}</label>
    <div class="setting-input__content">
      <input class="setting-input__input" />
      <div class="setting-input__info">{{ info }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    info: String,
  },
};
</script>

<style lang="scss" scoped>
.setting-input {
  display: flex;
  justify-content: space-between;
}
.setting-input__content {
  flex: 1 0 100%;
  max-width: 240px;
}
.setting-input__label {
  font-weight: 500;
  margin-bottom: 0;
  margin-right: 1rem;
  margin-top: 0.6rem;
  max-width: 12rem;
  font-size: 1.4rem;
}
.setting-input__input {
  font-size: 1.4rem;
  font-weight: 400;
  padding: 8px 10px;
  border: 0.1rem solid #e1e1e3;
  border-radius: 0.3rem;
  width: 100%;
  color: #222;
  line-height: 110%;
  align-self: flex-start;
  transition: all 0.3s ease;
  &:focus {
    border-color: var(--accent-color);
  }
}
.setting-input__info {
  font-weight: 400;
  line-height: 1.5;
  margin-top: 5px;
  color: #a3a3a3;
  font-size: 1.2rem;
}
</style>
