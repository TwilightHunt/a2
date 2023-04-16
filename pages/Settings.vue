<template>
  <div class="settings">
    <header class="settings__header">Настройки</header>
    <main class="settings__body">
      <section class="settings__section setting-sections__SIP">
        <div class="setting-sections__title">Звонки через SIP</div>
        <div class="settings-section__content">
          <div class="settings-section__content__description">
            Включите эту функцию чтобы Авито и другие площадки не блокировали
            ваш аккаунт. Будет выглядеть так, будто звонки совершаются с разных
            номеров.
          </div>
        </div>
      </section>
      <section class="settings__section setting-sections__account">
        <div class="setting-sections__title">Учётная запись</div>
        <div class="settings-section__content">
          <div class="settings-section__inputs">
            <OneLineInput class="settings-section__input" label="Компания" />
            <OneLineInput class="settings-section__input" label="Логин" />
            <OneLineInput
              class="settings-section__input"
              label="Номер телефона"
            />
            <OneLineInput class="settings-section__input" label="Имя" />
            <OneLineInput class="settings-section__input" label="Фамилия" />
          </div>
        </div>
      </section>
      <section class="settings__section setting-sections__notifications">
        <div class="setting-sections__title">Оповещения о новых подборках</div>
        <div class="settings-section__content">
          <div class="settings-section__content__description">
            Выберите, куда будут приходить уведомления при появлении
            автомобилей, которые подходят под критерии вашей подборки.
          </div>
          <RadioFieldset :inputs="notificationRadios" title="Уведомления" />
        </div>
      </section>
      <section class="settings__section setting-sections__cards">
        <div class="setting-sections__title">Переход в карточку</div>
        <div class="settings-section__content">
          <div class="settings-section__content__description">
            Выберите, каким образом будет открываться детальное представление
            выбранного вами транспорта.
          </div>
          <RadioFieldset :inputs="cardsRadios" />
        </div>
      </section>
      <section class="settings__section setting-sections__other">
        <div class="setting-sections__title">Прочие настройки</div>
        <div class="settings-section__content">
          <BaseButton>Сохранить</BaseButton>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import OneLineInput from "../components/UI/inputs/OneLineInput.vue";
import BaseButton from "../components/UI/buttons/BaseButton.vue";
import RadioFieldset from "../components/UI/inputs/RadioFieldset.vue";

const notificationRadios = [
  {
    id: 0,
    title: "Выкл",
  },
  {
    id: 1,
    title: "Push",
    disabled: true,
    info: "Можно установить только в приложении",
    dashed: true,
  },
  {
    id: 2,
    title: "Email",
    editable: true,
    dashed: true,
  },
  {
    id: 3,
    title: "Telegram ID",
    editable: true,
    link: true,
    dashed: true,
  },
];

const cardsRadios = [
  {
    id: 0,
    title: "В карточку в текущем окне",
  },
  {
    id: 1,
    title: "В карточку в отдельном окне",
    dashed: true,
  },
  {
    id: 2,
    title: "На источник ",
    dashed: true,
    info: "Прямой переход в объявление на источнике",
  },
];
</script>

<style lang="scss" scoped>
.settings {
  padding: 15px;
}
.settings__header {
  font-size: 3rem;
  color: #000;
  font-weight: 600;
  line-height: 1.25;
}
.settings__body {
  padding-top: 20px;
}
.settings__section {
  display: flex;
  margin-bottom: 4rem;
}
.settings-section__inputs {
  max-width: 37rem;
}
.setting-sections__title {
  font-size: 1.8rem;
  font-weight: 600;
  color: #000;
  flex: 0 0 25rem;
  margin-right: 2rem;
  max-width: 25rem;
}
.settings-section__content {
  max-width: 49rem;
  flex: 1 0 100%;
}
.settings-section__content__description {
  font-size: 1.4rem;
  font-weight: 400;
  color: #686869;
  line-height: 150%;
}
.setting-sections__account {
}
.settings-section__input {
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
}
.setting-sections__notifications {
}
.settings-section__content__description {
}
.setting-sections__cards {
}
.setting-sections__other {
}
</style>
