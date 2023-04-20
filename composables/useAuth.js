import axios from "~/plugins/axios";
import { useUserStore } from "../store/user.js";

export const signIn = ({ login, password }) =>
  new Promise(async (resolve, reject) => {
    try {
      if (!login || !password) {
        throw new Error("Login or password are null");
      }

      const res = await axios.post(
        "/login",
        { login, password, fromuser: 0 },
        {
          headers: {
            "X-Api-Key": "8bcfb6e1-4fa8-4fae-872c-a435bbdbe8d9",
            "Content-Type": "application/json",
          },
        }
      );
      const store = useUserStore();

      store.setAuthToken(res.data.token);
      store.setUser(res.data.user);

      resolve(true);
    } catch (error) {
      if (error.response) {
        reject(error.response.data.errors[0].title);
      }
      reject(error);
    }
  });

export const signUp = (phoneNumber) =>
  new Promise(async (resolve, reject) => {
    try {
      if (!phoneNumber) {
        throw new Error("Number is not specified");
      }

      const res = await axios.post(
        "/register",
        { login: phoneNumber },
        {
          headers: {
            "X-Api-Key": "8bcfb6e1-4fa8-4fae-872c-a435bbdbe8d9",
            "Content-Type": "application/json",
          },
        }
      );
      const store = useUserStore();

      store.setAuthToken(res.data.token);
      store.setUser(res.data.user);

      resolve(true);
    } catch (error) {
      if (error.response) {
        reject(error.response.data.errors[0].title);
      }
      reject(error);
    }
  });
