<template>
  <div class="dropdown" @click="toggleExpand">
    <div class="dropdown__content">Москва</div>
    <div v-if="isExpanded" class="dropdown__expand">
      <div v-for="option in options" class="dropdown__option">
        <div class="dropdown__option__body">
          <font-awesome-icon
            class="dd-icon"
            icon="fa-solid fa-check"
            size="lg"
          />
          <div>{{ option.title }}</div>
        </div>
      </div>
    </div>
    <font-awesome-icon
      class="dropdown__arrow"
      icon="fa-solid fa-chevron-down"
      color="#2dc574"
      ref="arrow"
    />
  </div>
</template>

<script>
export default {
  props: {
    options: Array,
  },
  data() {
    return {
      isExpanded: false,
    };
  },
  methods: {
    toggleExpand() {
      this.isExpanded = !this.isExpanded;
      this.$refs.arrow.classList.toggle("_rotated");
    },
  },
};
</script>

<style lang="scss" scoped>
.dropdown {
  position: relative;
  padding: 3.5px 40px 3.5px 10px;
  border: 0.1rem solid #e1e1e3;
  border-radius: 0.3rem;
  transition: all 0.3s ease;
  width: 100%;
  max-width: 215px;
  cursor: text;
  &:hover {
    border-color: var(--accent-color);
  }
}
.dropdown__content {
  color: #000;
  font-size: 1.5rem;
}
.dropdown__body {
  transition: all 0.3s ease;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  & select {
    display: none;
  }
}
.dropdown__option {
  cursor: pointer;
  background-color: var(--accent-color);
  &:hover {
    background-color: #239c5c;
  }
  div {
    font-size: 1.2rem;
  }
}
.dropdown__arrow {
  position: absolute;
  top: 11px;
  right: 11px;
  width: 10px;
  height: 8px;
  transition: transform 0.3s ease;
  &._rotated {
    transform: rotate(180deg);
  }
}
.dropdown__expand {
  position: absolute;
  top: calc(100% + 1px);
  right: 0;
  left: 0;
  color: #fff;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  max-height: 270px;
  overflow-y: auto;
}
.dropdown__option__body {
  position: relative;
  padding: 11px 0 11px 32px;
}
.dd-icon {
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
}
::-webkit-scrollbar {
  width: 0.7em;
}
::-webkit-scrollbar-track {
  background-color: #fff;
}
::-webkit-scrollbar-thumb {
  background-color: #ccc;
  border-radius: 5px;
  &:hover {
    background-color: var(--accent-color);
  }
}
@supports (scrollbar-color: #ccc) {
  * {
    scrollbar-color: rgba(#ccc, 0.2) #fff;
    scrollbar-width: auto;
  }
}
</style>
