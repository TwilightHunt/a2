<template>
  <AuthBox title="Регистрация" button="Отправить">
    <template v-slot:body>
      <div class="auth-popup__intro">
        Введите номер телефона и получите доступ к системе на
        <b>2 часа</b>.
      </div>
      <OneLineInput class="auth-popup__input" label="Телефон" v-model="phone" />
    </template>
    <template v-slot:footer>
      <div v-if="error" class="auth-popup__error">{{ error }}</div>
      <BaseButton @action="register" class="auth-popup__button"
        >Зарегистрироваться</BaseButton
      >
      <div class="auth-popup__info">Повторная регистрация не допускается</div>
      <div class="auth-popup__helper">
        Уже есть аккаунт?
        <a @click.prevent="setActivePopup('LoginBox')" href="">Войти</a>
      </div>
    </template>
  </AuthBox>
</template>

<script setup>
import AuthBox from "./AuthBox.vue";
import OneLineInput from "../../UI/inputs/OneLineInput.vue";
import usePopups from "../../../composables/usePopups.js";
import BaseButton from "../../UI/buttons/BaseButton.vue";

const { setActivePopup } = usePopups();
</script>

<script>
import { signUp } from "../../../composables/useAuth";
export default {
  data() {
    return {
      phone: "",
      error: "",
    };
  },
  methods: {
    async register() {
      console.log(this.phone);
      signUp(this.phone)
        .then(() => {
          this.$router.push({ path: "/settings" });
        })
        .catch((err) => (this.error = err));
    },
  },
};
</script>

<style lang="scss" scoped>
.auth-popup__helper {
  font-size: 1.4rem;
  font-weight: 500;
  & a {
    color: var(--accent-color);
    font-size: inherit;
  }
}
.auth-popup__intro {
  color: #686869;
  font-size: 1.4rem;
  line-height: 1.3;
  margin-bottom: 2.5rem;
  & b {
    font-size: 1.4rem;
  }
}
.auth-popup__helper {
  text-align: center;
  margin-top: 2rem;
}
.auth-popup__input {
  margin-bottom: 3rem;
}
.auth-popup__info {
  color: #686869;
  font-size: 1.2rem;
  text-align: center;
  margin-top: 5px;
}
.auth-popup__error {
  font-size: 1.4rem;
  font-weight: 500;
  text-align: center;
  color: #e12f17;
  margin: 3px 0;
}
</style>
