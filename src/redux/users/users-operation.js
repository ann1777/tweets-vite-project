import { instance } from "../../api/Api";
import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// export const instance = axios.create({
//   baseURL: "https://6492eafc428c3d2035d0e662.mockapi.io/api/",
// });

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async (_, { rejectWithValue }) => {
    try {
      const users = await instance.get("/users");
      return users.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const followUser = createAsyncThunk(
  "users/followUser",
  async (
    { name, avatar, tweets, followers, check, id },
    { rejectWithValue }
  ) => {
    try {
      console.log(name, avatar, tweets, followers, check, id);
      if (check) {
        const updatedUser = {
          name,
          tweets,
          followers: followers - 1,
          avatar,
          check: !check,
          id,
        };
        const users = await instance.put(`/users/${id}`, updatedUser);
        return users.data;
      }
      const updatedUser = {
        name,
        tweets,
        followers: followers + 1,
        avatar,
        check: !check,
        id,
      };
      const users = await instance.put(`/users/${id}`, updatedUser);
      return users.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
