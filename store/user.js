import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: {},
    loggedIn: false,
    token: "",
    city: { title: "Москва" },
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
