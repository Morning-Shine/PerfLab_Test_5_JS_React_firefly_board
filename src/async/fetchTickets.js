//TODO добавить отбор для from
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFirestore } from "firebase/firestore";
import {
  query,
  orderBy,
  collection,
  doc,
  limit, 
  startAt,
  getDocs,
  onSnapshot,
} from "firebase/firestore";

const db = getFirestore();

export const fetchTickets = createAsyncThunk(
  "firebaseDataLoading/fetchTickets",
  async function (rangeNumbers, thunkAPI) {
      const ticketsRef = collection(db, "tickets");
      const ticketsQuery = query(
        ticketsRef,
        orderBy("date", "desc"),
        //startAt(3),
        limit(rangeNumbers.limit)
      );
      const ticketsSnapshot = await getDocs(ticketsQuery);
      let tickets=[];
      ticketsSnapshot.forEach(doc => {
        tickets.push(doc.data());
        // console.log(doc.id, " => ", doc.data(), typeof doc);
      });
      console.log(tickets);
      return tickets;
  }
  )
