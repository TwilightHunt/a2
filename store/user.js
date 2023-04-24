import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: {},
    loggedIn: false,
    token: "",
    city: { title: "Москва" },
    notification: {
      id: 0,
      title: "Выкл",
    },
    cardSetting: {
      id: 0,
      title: "В карточку в текущем окне",
    },
  }),
  getters: {
    isAuthenticated: (state) => state.loggedIn,
    getUser: (state) => state.user,
  },
  actions: {
    setAuthToken(token) {
      this.token = token;
    },
    setUser(user) {
      this.user = user;
    },
  },
  persist: true,
});
