import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUser = createAsyncThunk("users/get-users", async () => {
  const { data } = await axios.get(
    `http://localhost:8080/api/v1/users/get-users`
  );
  return data;
});

export const deleteUser = createAsyncThunk(
  "users/delete-user",
  async ({ id }) => {
    const { data } = await axios.delete(
      `http://localhost:8080/api/v1/users/delete-user/${id}`
    );
    return data;
  }
);

export const addUser = createAsyncThunk(
  "users/add-user",
  async ({ id, name, email }) => {
    const { data } = await axios.post(
      `http://localhost:8080/api/v1/users/add-user`,
      { id, name, email }
    );
    return data;
  }
);

export const editUser = createAsyncThunk(
  "users/update-user",
  async ({ id, name, email }) => {
    const { data } = await axios.put(
      `http://localhost:8080/api/v1/users/delete-user/${id}`,
      { name, email }
    );
    return data;
  }
);

const UserSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [getUser.pending]: (state, action) => {
      state.loading = true;
    },
    [getUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = [action.payload];
    },
    [getUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [deleteUser.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [deleteUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [addUser.pending]: (state, action) => {
      state.loading = true;
    },
    [addUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = [action.payload];
    },
    [addUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [editUser.pending]: (state, action) => {
      state.loading = true;
    },
    [editUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = [action.payload];
    },
    [editUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default UserSlice.reducer;
