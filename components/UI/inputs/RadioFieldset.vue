<template>
  <form class="radio-fieldset">
    <legend class="radio-fieldset__legend">{{ title }}</legend>
    <div
      @click.stop="selectField"
      v-for="input in inputs"
      :key="input.id"
      class="radio-fieldset__input__content"
      :class="input.disabled ? '_disabled' : ''"
    >
      <input
        class="radio-fieldset__radio"
        type="radio"
        id="radio"
        :disabled="input.disabled"
      />

      <a v-if="input.link === true" class="radio-fieldset__label_link" href="">
        {{ input.title }}
      </a>
      <label
        v-if="input.link === undefined"
        :class="`radio-fieldset__label ${input.disabled ? '_disabled' : ''}`"
        >{{ input.title }}</label
      >
      <input
        v-if="input.editable"
        type="text"
        @click.stop
        class="radio-fieldset__text-input"
        @change="$emit('onEdit')"
      />
      <Info v-if="input.info" :text="input.info" class="radio-fieldset__info" />
      <div
        v-if="input.editable"
        class="radio-fieldset__edit"
        @click.stop="editField"
      >
        <font-awesome-icon
          icon="fa-solid fa-pen-to-square"
          style="color: #2dc574"
          size="xl"
          class="radio-fieldset__edit-icon"
        />
      </div>

      <div v-if="input.dashed" class="dash"></div>
    </div>
  </form>
</template>

<script>
import Info from "../Info.vue";
export default {
  props: {
    inputs: { type: Array, required: true },
    title: String,
  },

  components: {
    Info,
  },
  methods: {
    //Check current radio
    selectField(event) {
      const radio = event.target?.querySelector("#radio");
      if (!radio?.disabled) {
        event.target?.parentElement
          ?.querySelectorAll("#radio")
          ?.forEach((el) => {
            el?.classList?.remove("_checked");
          });
        radio?.classList?.add("_checked");
      }
    },
    // Showing the input in editable field
    editField(event) {
      event.target.parentNode.querySelector(
        ".radio-fieldset__text-input"
      ).style.display = "block";
      event.target.style.display = "none";
    },
  },
};
</script>

<style lang="scss" scoped>
.radio-fieldset__legend {
  margin-bottom: 2rem;
  font-size: 1.5rem;
  font-weight: 600;
}

.radio-fieldset__input__content {
  display: flex;
  align-items: center;
  padding: 15px 0;
  position: relative;
  cursor: pointer;
  &._disabled {
    cursor: default;
    & > .radio-fieldset__label {
      color: #ccc;
    }
  }
}
.radio-fieldset__radio {
  margin: 0;
  margin-right: 5px;
  pointer-events: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  color: var(--accent-color);
  width: 18px;
  height: 18px;
  border: 2px solid var(--accent-color);
  border-radius: 50%;
  flex: 0 0 auto;
}
.radio-fieldset__radio::before {
  content: "";
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  transform: translate(20%, 20%) scale(0);
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em var(--accent-color);
}
.radio-fieldset__radio._checked::before {
  transform: translate(20%, 20%) scale(1);
}
.radio-fieldset__radio:disabled {
  pointer-events: none;
  opacity: 0.5;
}
.radio-fieldset__info {
  margin-left: auto;
}
.radio-fieldset__edit {
  margin-left: auto;
}
.radio-fieldset__edit-icon {
  pointer-events: none;
}
.radio-fieldset__label {
  font-size: 1.4rem;
  color: #000;
  font-weight: 500;
  pointer-events: none;
  flex: 0 0 12rem;
  margin-right: 1rem;
  max-width: 12rem;
  width: 100%;
  white-space: nowrap;
}
.radio-fieldset__label_link {
  font-size: 1.4rem;
  font-weight: 500;
  flex: 0 0 12rem;
  margin-right: 1rem;
  max-width: 12rem;
  text-decoration: underline;
}

.dash {
  height: 1px;
  background-color: #ccc;
  position: absolute;
  opacity: 0.5;
  top: 0;
  left: 0;
  right: 0;
}

a {
  color: var(--accent-color);
}
.radio-fieldset__text-input {
  margin-left: auto;
  padding: 0.8rem 1rem;
  appearance: none;
  background: #fff;
  border: 0.1rem solid #e1e1e3;
  border-radius: 0.3rem;
  color: #222;
  line-height: 1.1;
  width: 100%;
  display: none;
  max-width: 240px;
}
</style>
