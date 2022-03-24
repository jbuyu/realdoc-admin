import consultationService from "./consultationService";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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

const initialState = {
  consultations: [],
  consultation: "",
  isError: false,
  isSuccess: false,
  isLoading: false,
  meassage: "",
};

// create a consultation
export const createConsultation = createAsyncThunk(
  "consultation/create",
  async (consultationData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await consultationService.createconsultation(
        consultationData,
        token
      );
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getConsultation = createAsyncThunk(
  "consultation/get",
  async (consultationId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await consultationService.getConsultation(consultationId, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
//get consultations
export const getConsultations = createAsyncThunk(
  "consultations/getAll",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await consultationService.getConsultations(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const getPendingConsultations = createAsyncThunk(
  "consultations/getAll/pending",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await consultationService.getPendingConsultations(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const getCompletedConsultations = createAsyncThunk(
  "consultations/getAll/completed",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await consultationService.getCompletedConsultations(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const consultationSlice = createSlice({
  name: "consultation",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createConsultation.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createConsultation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.consultations.push(action.payload);
      })
      .addCase(createConsultation.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getConsultations.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getConsultations.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.consultations = action.payload;
      })
      .addCase(getConsultations.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getPendingConsultations.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPendingConsultations.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.consultations = action.payload;
      })
      .addCase(getPendingConsultations.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getCompletedConsultations.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCompletedConsultations.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.consultations = action.payload;
      })
      .addCase(getCompletedConsultations.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getConsultation.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getConsultation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.consultation = action.payload;
      })
      .addCase(getConsultation.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
    // .addCase(deleteConsultation.pending, (state) => {
    //   state.isLoading = true;
    // })
    // .addCase(deleteConsultation.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.isSuccess = true;
    //   state.consultations = state.consultations.filter(
    //     (consultation) => consultation._id !== action.payload.id
    //   );
    // })
    // .addCase(deleteConsultation.rejected, (state, action) => {
    //   state.isLoading = false;
    //   state.isError = true;
    //   state.message = action.payload;
    // });
  },
});

export const { reset } = consultationSlice.actions;
export default consultationSlice.reducer;
