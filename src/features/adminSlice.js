import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "@/utils/axios";
import toast from "react-hot-toast";

export const getAllUsers = createAsyncThunk(
  "admin/getAllUsers",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.getAllUsers();
      return res.data.users;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch users"
      );
    }
  }
);

export const getSellers = createAsyncThunk(
  "admin/getSellers",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.getSellers();
      return res.data.sellers;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch sellers"
      );
    }
  }
);

export const deleteUser = createAsyncThunk(
  "admin/deleteUser",
  async (id, { rejectWithValue }) => {
    try {
      await axiosInstance.deleteUser(id);
      toast.success("User deleted");
      return id;
    } catch (error) {
      const msg =
        error.response?.data?.message || "Delete failed";
      toast.error(msg);
      return rejectWithValue(msg);
    }
  }
);

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    users: [],
    sellers: [],
    loading: false,
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getAllUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(getSellers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSellers.fulfilled, (state, action) => {
        state.loading = false;
        state.sellers = action.payload;
      })
      .addCase(getSellers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;

        state.users = state.users.filter(
          (u) => u._id !== action.payload
        );

        state.sellers = state.sellers.filter(
          (s) => s._id !== action.payload
        );
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default adminSlice.reducer;