<template>
  <button class="base-button" @click="$emit('action')">
    <slot></slot>
  </button>
</template>

<script setup></script>

<style lang="scss" scoped>
.base-button {
  background: var(--accent-color);
  color: #fff;
  font-size: 1.3rem;
  font-weight: 600;
  line-height: 1.1;
  outline: none;
  padding: 1.3rem 2rem;
  border: 0;
  border-radius: 0.4rem;
  cursor: pointer;
  width: 100%;
  transition: all 0.3s ease;
  &:hover {
    background: #239c5c;
  }
}
[disabled] {
  background-color: #dbdbdb;
  color: #333;
  cursor: default;
  &:hover {
    background-color: #dbdbdb;
  }
}
</style>
