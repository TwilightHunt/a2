export const notificationRadios = [
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
    method: "updateEmail",
  },
  {
    id: 3,
    title: "Telegram ID",
    editable: true,
    link: true,
    dashed: true,
  },
];

export const cardsRadios = [
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

export const times = [
  {
    title: "Каллининград",
  },
  {
    title: "Москва",
  },
  {
    title: "Самара",
  },
  {
    title: "Екатеринбург",
  },
  {
    title: "Омск",
  },
  {
    title: "Красноярск",
  },
  {
    title: "Иркутск",
  },
  {
    title: "Якутск",
  },
  {
    title: "Владивосток",
  },
  {
    title: "Магадан",
  },
  {
    title: "Камчатка",
  },
];
