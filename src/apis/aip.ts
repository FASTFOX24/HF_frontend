import { database } from "../firebase";
import { push, ref, set } from "firebase/database";
import { child, get } from "firebase/database";

interface postDataProps {
  url: string;
  data: object;
}

export const getData = async (url: string) => {
  try {
    const dbRef = ref(database);
    const snapshot = await get(child(dbRef, `${url}`));
    return snapshot.val();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export const pushData = (url: string, data: object) => {
  const db = database;
  push(ref(db, url), data);
};
export const postData = ({ url, data }: postDataProps) => {
  const db = database;
  set(ref(db, `${url}`), data);
};
