<template>
  <AuthBox title="Авторизация">
    <template v-slot:body>
      <HighInput
        class="auth-popup__fields__login auth-popup__fields__input"
        label="Логин"
        placeholder="Введите логин"
        v-model="data.login"
      />
      <HighInput
        class="auth-popup__fields__passwrod auth-popup__fields__input"
        label="Пароль"
        placeholder="Введите пароль"
        password
        v-model="data.passwrod"
      />
      <a href="" class="auth-popup__fields__forgot-password">Забыли пароль?</a>
      <div v-if="data.error" class="auth-popup__error">{{ data.error }}</div>
    </template>
    <template v-slot:footer>
      <BaseButton @action="login" class="auth-popup__button">Войти</BaseButton>
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

import { signIn } from "@/composables/useAuth.js";
import usePopups from "@/composables/usePopups.js";
import { reactive } from "vue";

const { setActivePopup } = usePopups();

const data = reactive({
  login: "",
  passwrod: "",
  error: "",
});

const login = async () => {
  signIn({ login: data.login, password: data.passwrod }).catch(
    (err) => (data.error = err)
  );
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
