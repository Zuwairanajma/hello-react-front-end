import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';

export const fetchRandomGreeting = createAsyncThunk('greetings/fetchRandomGreeting', async () => {
  const response = await api.get('/greetings/random');
  return response.data.message;
});

const greetingSlice = createSlice({
  name: 'greetings',
  initialState: { message: '', isLoading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomGreeting.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchRandomGreeting.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(fetchRandomGreeting.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default greetingSlice.reducer;
