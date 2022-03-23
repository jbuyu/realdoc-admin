// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import consultationService from "./consultationService";

// const initialState = {
//   consultations: [],
//   isError: false,
//   isSuccess: false,
//   isLoading: false,
//   message: "",
// };

// // Create new consultation
// export const createConsultation = createAsyncThunk(
//   "consultations/create",
//   async (consultationData, thunkAPI) => {
//     try {
//       const token = thunkAPI.getState().auth.user.token;
//       return await consultationService.createconsultation(
//         consultationData,
//         token
//       );
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();
//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );

// // Get user consultations
// export const getConsultations = createAsyncThunk(
//   "consultations",
//   async (_, thunkAPI) => {
//     try {
//       const token = thunkAPI.getState().auth.user.token;
//       return await consultationService.getconsultations(token);
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();
//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );

// // Delete user consultation
// export const deleteConsultation = createAsyncThunk(
//   "consultations/delete",
//   async (id, thunkAPI) => {
//     try {
//       const token = thunkAPI.getState().auth.user.token;
//       return await consultationService.deleteConsultation(id, token);
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();
//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );

// export const consultationSlice = createSlice({
//   name: "consultation",
//   initialState,
//   reducers: {
//     reset: (state) => initialState,
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(createConsultation.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(createConsultation.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isSuccess = true;
//         state.consultations.push(action.payload);
//       })
//       .addCase(createConsultation.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.message = action.payload;
//       })
//       .addCase(getConsultations.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(getConsultations.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isSuccess = true;
//         state.consultations = action.payload;
//       })
//       .addCase(getConsultations.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.message = action.payload;
//       })
//       .addCase(deleteConsultation.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(deleteConsultation.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isSuccess = true;
//         state.consultations = state.consultations.filter(
//           (consultation) => consultation._id !== action.payload.id
//         );
//       })
//       .addCase(deleteConsultation.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.message = action.payload;
//       });
//   },
// });

// export const { reset } = consultationSlice.actions;
// export default consultationSlice.reducer;
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  goals: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  meassage: "",
};

export const consultationSLice = createSlice({
  name: "coonsultation",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
});

export const { reset } = consultationSLice.actions;
export default consultationSLice.reducer;
