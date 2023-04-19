<template>
  <div class="settings">
    <header class="settings__header">Настройки</header>
    <main class="settings__body">
      <section class="settings__section setting-sections__SIP">
        <div class="setting-sections__title">Звонки через SIP <Slider /></div>
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
            <SettingsInput class="settings-section__input" label="Компания" />
            <SettingsInput class="settings-section__input" label="Логин" />
            <SettingsInput
              class="settings-section__input"
              label="Номер телефона"
            />
            <SettingsInput class="settings-section__input" label="Имя" />
            <SettingsInput
              class="settings-section__input"
              label="Фамилия"
              info="*Не обязательно"
            />
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
          <RadioFieldset
            class="settings-section__content__radio-fieldset radio-fieldset_notification"
            :inputs="notificationRadios"
            title="Уведомления"
          />
        </div>
      </section>
      <section class="settings__section setting-sections__cards">
        <div class="setting-sections__title">Переход в карточку</div>
        <div class="settings-section__content">
          <div class="settings-section__content__description">
            Выберите, каким образом будет открываться детальное представление
            выбранного вами транспорта.
          </div>
          <RadioFieldset
            class="settings-section__content__radio-fieldset"
            :inputs="cardsRadios"
          />
        </div>
      </section>
      <section class="settings__section setting-sections__other">
        <div class="setting-sections__title">Прочие настройки</div>
        <div class="settings-section__content">
          <div class="settings-section__content__select">
            <div>Часовой пояс</div>
            <Dropdown
              @chooseItem="setUserCity"
              :options="times"
              :checked="useStore.city.title"
            />
          </div>
          <ChecboxField
            text="Автоматически переходить к новым объявлениям"
            info="Лента будет автоматически обновляться 1 раз в 3 секунды"
          />
          <ChecboxField
            text="Включить цвета в ленте"
            info="Включение зеленого/желтого цвета"
          />
          <div class="dash"></div>
          <BaseButton>Сохранить</BaseButton>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import SettingsInput from "../components/UI/inputs/SettingsInput.vue";
import BaseButton from "../components/UI/buttons/BaseButton.vue";
import RadioFieldset from "../components/UI/inputs/RadioFieldset.vue";
import Dropdown from "../components/UI/Dropdown.vue";
import Slider from "../components/UI/Slider.vue";
import ChecboxField from "../components/UI/CheckboxField.vue";
import { useUserStore } from "../store/user.js";
import {
  notificationRadios,
  cardsRadios,
  times,
} from "../composables/lists.js";

const useStore = useUserStore();

const setUserCity = (option) => {
  useStore.city = option;
};
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
  display: flex;
  align-items: flex-start;
  column-gap: 7px;
}
.settings-section__content {
  max-width: 49rem;
  flex: 1 0 100%;
}
.radio-fieldset_notification {
  margin-top: 20px;
}
.settings-section__content__description {
  font-size: 1.4rem;
  font-weight: 400;
  color: #686869;
  line-height: 150%;
}
.settings-section__content__select {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  max-width: 37rem;
  div {
    font-size: 1.4rem;
    font-weight: 500;
    margin-right: 25px;
    margin-top: 4px;
  }
}
.settings-section__input {
  &.one-line-input > .input-high__input {
    max-width: 240px;
  }
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
}
.settings-section__content__radio-fieldset {
  max-width: 37rem;
}
.dash {
  height: 1px;
  background-color: #ccc;
  position: relative;
  opacity: 0.5;
  top: 0;
  left: 0;
  right: 0;
  margin: 30px 0 15px 0;
}
</style>
