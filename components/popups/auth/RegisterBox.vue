<template>
  <AuthBox title="Регистрация" button="Отправить">
    <template v-slot:body>
      <div class="auth-popup__intro">
        Введите номер телефона и получите доступ к системе на
        <b>2 часа</b>.
      </div>
      <OneLineInput class="auth-popup__input" label="Телефон" />
    </template>
    <template v-slot:footer>
      <BaseButton class="auth-popup__button">Зарегистрироваться</BaseButton>
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
</style>
