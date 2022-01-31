import { createSlice } from "@reduxjs/toolkit";
import { fetchTickets } from "../async/fetchTickets";

//TODO в гугле открыты вкладки, дописать слайс и создать thunk
const initialState = {
  tickets: [],
  status: null,
  error: null,
};

const firebaseDataLoading = createSlice({
  name: "firebaseDataLoading",
  initialState,
  reducers: {
    // addDataToTable(state, action) {
    //   state.status = action.payload.status;
    //   state.tickets = action.payload.tickets;
    //   console.log("action", action);
    // },
  },
  extraReducers: {
    [fetchTickets.pending]: state => {
      state.status = "loading";
      state.error = null;
      /*TODO прелоадер*/
    },
    [fetchTickets.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.error = null;
      // console.log("получено в экстра редюсере", action);
      state.tickets = Object.entries(action.payload);
    },
    [fetchTickets.rejected]: (state, action) => {
      //state.tickets = action.payload; добавить обр. ошибки
    },
  },
});

export const { addDataToTable } = firebaseDataLoading.actions;

export default firebaseDataLoading.reducer;
