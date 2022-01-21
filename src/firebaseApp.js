import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseConfig";

import { getDatabase, ref, set } from "firebase/database";

export const app = initializeApp(firebaseConfig);

export async function writeNewTicket(
  userId,
  userName,
  userAvatar,
  title,
  select,
  decr,
  taskId,
  date,
  isOpen
) {
  
  const db = getDatabase();
  await set(ref(db, "tickets/" + taskId), {
    user: { userId, userName, userAvatar },
    title,
    select,
    decr,
    date,
    isOpen,
  });
}
