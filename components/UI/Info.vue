<template>
  <div class="info">
    <font-awesome-icon
      :icon="['fas', 'circle-question']"
      style="color: #cccccc"
      size="2xl"
      class="info__icon"
    />
    <div class="info__box">
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.info {
  width: 20px;
  height: 20px;
  position: relative;
}
.info__box {
  position: absolute;
  right: 0;
  opacity: 0;
  transform: translate(50%, 0);
  pointer-events: none;
  transition: all 0.3s ease;
  z-index: 5;
  background-color: var(--accent-color);
  color: #fff;
  padding: 7px 13px;
  font-size: 1.2rem;
  font-weight: 700;
  border-radius: 3px;
  max-width: 350px;
  min-width: 340px;
  text-align: center;

  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 7px solid var(--accent-color);
    top: -7px;
    right: 50%;
  }
}
.info__icon {
  cursor: help;
}
.info__icon:hover ~ .info__box {
  opacity: 1;
  transform: translate(50%, 10px);
}
</style>
