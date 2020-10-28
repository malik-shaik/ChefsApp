import { action, observable } from "mobx";
import userAPI from "../api/userAPI";

const UserStore = () => {
  const store = observable({
    /* Data in the store */
    isLoggedIn: false,
    authToken: null,
    user: {
      name: "Malik"
    },

    /* Actions to change the data */
    loginAction: action(async (data) => {
      // TODO: login code here
      const res = await userAPI.login(data);
      console.log("login action...", res);
      store.user = res.user;
      store.authToken = res.token;
      store.isLoggedIn = true;
    }),

    changeName: action((name) => {
      store.user.name = name;
    })
  });

  return store;
};

export default UserStore;
