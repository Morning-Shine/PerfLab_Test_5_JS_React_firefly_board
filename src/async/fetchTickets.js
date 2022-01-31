//TODO добавить отбор для from
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getDatabase,
  ref,
  query,
  get,
  orderByChild,
  child,
  orderByValue,
  limitToLast,
} from "firebase/database";

const db = getDatabase();

export const fetchTickets = createAsyncThunk(
  "firebaseDataLoading/fetchTickets",
  async function (rangeNumbers, thunkAPI) {
    //  console.log("thunkAPI", thunkAPI);
    let ticketsData;
    const snapshot = await get(
      query(
        ref(db, "tickets"),
        orderByValue("taskId/date"),
        limitToLast(rangeNumbers)
      )
    );
    // console.log("snapshot", snapshot);
    if (snapshot.exists()) {
      ticketsData = snapshot.val();
      // console.log("данные получены с сервера", ticketsData);
      return ticketsData;
    }
    /*  .catch(error => {
    console.error("ошибка получения данных при построении таблицы", error);
});*/
  }
);
