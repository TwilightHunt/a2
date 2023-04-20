<template>
  <AuthBox title="Авторизация">
    <template v-slot:body>
      <HighInput
        class="auth-popup__fields__login auth-popup__fields__input"
        label="Логин"
        placeholder="Введите логин"
        v-model="login"
      />
      <HighInput
        class="auth-popup__fields__passwrod auth-popup__fields__input"
        label="Пароль"
        placeholder="Введите пароль"
        password
        v-model="passwrod"
      />
      <a href="" class="auth-popup__fields__forgot-password">Забыли пароль?</a>
      <div v-if="error" class="auth-popup__error">{{ error }}</div>
    </template>
    <template v-slot:footer>
      <BaseButton @action="loginUser" class="auth-popup__button"
        >Войти</BaseButton
      >
      <div class="auth-popup__helper">
        Нет аккаунта?
        <a href="" @click.prevent="setActivePopup('RegisterBox')"
          >Зарегистрироваться</a
        >
      </div>
    </template>
  </AuthBox>
</template>

<script setup>
import AuthBox from "./AuthBox.vue";
import HighInput from "../../UI/inputs/HighInput.vue";
import BaseButton from "../../UI/buttons/BaseButton.vue";

import usePopups from "@/composables/usePopups.js";

const { setActivePopup } = usePopups();
</script>

<script>
import { signIn } from "@/composables/useAuth.js";
export default {
  data() {
    return {
      login: "",
      passwrod: "",
      error: "",
    };
  },
  methods: {
    async loginUser() {
      signIn({ login: this.login, password: this.passwrod })
        .then(() => {
          this.$router.push({ path: "/settings" });
        })
        .catch((err) => (this.error = err));
    },
  },
};
</script>

<style lang="scss" scoped>
.auth-popup__fields {
  margin-bottom: 30px;
}
.auth-popup__fields__forgot-password {
  color: var(--accent-color);
  font-size: 1.4rem;
  font-weight: 500;
  text-align: right;
  display: block;
  margin-top: 1rem;
}
.auth-popup__fields__input {
  padding: 9px 13px;
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
}
.auth-popup__helper {
  font-size: 1.4rem;
  font-weight: 500;
  & a {
    color: var(--accent-color);
    font-size: inherit;
  }
}
.auth-popup__helper {
  text-align: center;
  margin-top: 1.3rem;
}

.auth-popup__error {
  font-size: 1.4rem;
  font-weight: 500;
  text-align: center;
  color: #e12f17;
  margin: 3px 0;
}
</style>
