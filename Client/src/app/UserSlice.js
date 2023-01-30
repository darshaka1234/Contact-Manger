import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const getData = async () => {
  try {
    const { data } = await axios.get(
      `http://localhost:8080/api/v1/users/get-users`
    );

    return Object.keys(data).map((key) => data[key]);
  } catch (err) {
    throw new Error(err);
  }
};
const UserSlice = createSlice({
  name: "users",
  initialState: {
    data: getData(),
  },
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    editUser: (state, action) => {
      const { id, name, email } = action.payload;
      const curUser = state.find((user) => user.id === id);
      if (curUser) {
        curUser.name = name;
        curUser.email = email;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const curUser = state.find((user) => user.id === id);
      if (curUser) {
        return state.filter((user) => user.id !== id);
      }
    },
  },
});

export const { addUser, editUser, deleteUser } = UserSlice.actions;
export default UserSlice.reducer;
