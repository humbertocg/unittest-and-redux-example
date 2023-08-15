import { createSlice } from "@reduxjs/toolkit";
import { UserType } from "../types/userType";

const initialState: UserType = {
  results: [],
  info: {
    seed: "",
    results: 0,
    page: 0,
    version: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addAndHiredUsers: (state, action) => {
      const { /*hired: statushired, */user, /*results, index*/ } = action.payload;

      /*state.results = state.results.map((item) => {
        if (
          item.name.title === user.name.title &&
          item.name.first === user.name.first &&
          item.name.last === user.name.last
        ) {
          return { ...item, hired: statushired };
        }
        return item;
      });

      state.results = [...state.results, ...results];*/
      state.results = [...state.results , user];
    },
    setUsers: (state, action) => {
      state.results = [...action.payload];
    },
    removeUser: (state, action) => {
      const { user } = action.payload;
      console.log(user);
      state.results = state.results.filter(
        (item) =>
          `${item.name.title}${item.name.first}${item.name.last}` !==
          `${user.name.title}${user.name.first}${user.name.last}`
      );
    },
  },
});

export const { addAndHiredUsers, setUsers, removeUser } = userSlice.actions;
export default userSlice.reducer;
