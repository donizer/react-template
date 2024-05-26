import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  id: number;
}

const initialState: CounterState = {
  id: 0,
};

export const userSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementId(state) {
      state.id += 1;
    },
    decrementId(state) {
      state.id -= 1;
    },
    setId: (state, action: PayloadAction<number>) => {
      state.id = action.payload;
    },
  },
});

export const { setId, incrementId, decrementId } = userSlice.actions;

export const userReducer = userSlice.reducer;
