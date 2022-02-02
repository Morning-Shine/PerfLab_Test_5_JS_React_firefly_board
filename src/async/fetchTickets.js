//TODO добавить отбор для from
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFirestore, where } from "firebase/firestore";
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

    /* let tickets = []; //TODO разобраться со снапшотами
    const ticketsSnapshot = onSnapshot(ticketsQuery, querySnapshot => {
      querySnapshot.forEach(doc => {
        tickets.push(doc.data());
      });
      console.log('tickets', tickets);
    });*/
    // console.log("ticketsSnapshot", ticketsSnapshot);
    const ticketsSnapshot = await getDocs(ticketsQuery);
    let tickets = [];
    ticketsSnapshot.forEach(doc => {
      tickets.push(doc.data());
    });
    return tickets;
  }
);

export const calcAllUncompletedTickets = createAsyncThunk(
  "firebaseDataLoading/calcAllUncompletedTickets",
  async function (_, thunkAPI) {
    const tickets = { high: 0, normal: 0, low: 0 };
    const ticketsRef = collection(db, "tickets");

    const queryHigh = query(
      ticketsRef,
      where("isOpen", "==", true),
      where("priority", "==", "high")
    );
    const queryNormal = query(
      ticketsRef,
      where("isOpen", "==", true),
      where("priority", "==", "normal")
    );
    const queryLow = query(
      ticketsRef,
      where("isOpen", "==", true),
      where("priority", "==", "low")
    );
    const ticketsHigh = await getDocs(queryHigh);
    const ticketsNormal = await getDocs(queryNormal);
    const ticketsLow = await getDocs(queryLow);
    tickets.high = ticketsHigh.size;
    tickets.normal = ticketsNormal.size;
    tickets.low = ticketsLow.size;
    return tickets;
  }
);

export const calcUserUncompletedTickets = createAsyncThunk(
  "firebaseDataLoading/calcUserUncompletedTickets",
  async function (user, thunkAPI) {
    const tickets = { high: 0, normal: 0, low: 0 };
    const ticketsRef = collection(db, "tickets");

    const queryHigh = query(
      ticketsRef,
      where("isOpen", "==", true),
      where("priority", "==", "high"),
      where("user.userId", "==", user)
    );
    const queryNormal = query(
      ticketsRef,
      where("isOpen", "==", true),
      where("priority", "==", "normal"),
      where("user.userId", "==", user)
    );
    const queryLow = query(
      ticketsRef,
      where("isOpen", "==", true),
      where("priority", "==", "low"),
      where("user.userId", "==", user)
    );
    const ticketsHigh = await getDocs(queryHigh);
    const ticketsNormal = await getDocs(queryNormal);
    const ticketsLow = await getDocs(queryLow);
    tickets.high = ticketsHigh.size;
    tickets.normal = ticketsNormal.size;
    tickets.low = ticketsLow.size;
    return tickets;
  }
);
