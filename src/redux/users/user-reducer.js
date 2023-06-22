import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./users-operation";

const initialState = {
  data: [],
  filter: "ShowAll",
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    filterItems: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, { payload }) => {
      state.data = payload;
    });
  },
});

export const { filterItems } = userSlice.actions;
