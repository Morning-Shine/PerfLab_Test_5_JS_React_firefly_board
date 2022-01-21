import { ref, getDatabase } from "firebase/database";
import { useList } from "react-firebase-hooks/database";

const database = getDatabase(firebaseApp);

const [snapshots, loading, error] = useList(ref(database, "list"));
