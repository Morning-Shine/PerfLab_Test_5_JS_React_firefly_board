//  import { getDatabase, ref, child, get } from "firebase/database";

// //запросить всю БД
// const dbRef = ref(getDatabase());
// get(child(dbRef, `tickets`))
//   .then(snapshot => {
//     if (snapshot.exists()) {
//       console.log(snapshot.val());
//     } else {
//       console.log("No data available");
//     }
//   })
//   .catch(error => {
//     console.error(error);
//   });
