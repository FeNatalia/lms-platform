// NPM Packages
import { collection, getDocs } from "firebase/firestore/lite";

// Read files
export async function getCollection(db, path) {
  const myCollection = collection(db, path);
  const mySnapshot = await getDocs(myCollection);
  const myList = mySnapshot.docs.map((doc) => doc.data());

  return myList;
}
