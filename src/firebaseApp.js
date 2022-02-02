import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseConfig";
import { getDatabase, ref, set } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

export const app = initializeApp(firebaseConfig);

export async function writeNewTicket(
  userId,
  userName,
  userAvatar,
  title,
  priority,
  decr,
  taskId,
  date,
  isOpen
) {
  // const db = getDatabase();
  const db = getFirestore();
  await addDoc(collection(db, "tickets"), {
    // await set(ref(db, "tickets/" + taskId), {
    user: { userId, userName, userAvatar },
    taskId,
    title,
    priority,
    decr,
    date,
    isOpen,
  });
}
