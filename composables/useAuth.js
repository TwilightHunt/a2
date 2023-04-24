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

export const update = (data) =>
  new Promise(async (resolve, reject) => {
    try {
      const store = useUserStore();

      await axios.put(
        `/user/${store.user.id}`,
        { ...store.user, ...data },
        {
          headers: {
            "X-Api-Key": "8bcfb6e1-4fa8-4fae-872c-a435bbdbe8d9",
            "X-User-Token": store.token,
            "Content-Type": "application/json",
          },
        }
      );

      resolve(true);
    } catch (error) {
      if (error.response) {
        console.log(error.response);
        reject(error.response.data.Message);
      }
      reject(error);
    }
  });
