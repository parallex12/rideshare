import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  onSnapshot,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { GET_ALL_CHATS, GET_ERRORS } from "../types/types";
import { getAuth } from "firebase/auth";
// import { firebaseImageUpload } from "../../middleware";

export const getRelation = (users) => async (dispatch) => {
  console.log(users[0], users[1]);
  return new Promise(async (resolve, reject) => {
    try {
      const db = getFirestore();
      const chatRef = collection(db, "chats");
      const q = query(
        chatRef,
        where("users", "array-contains-any", [users[0], users[1]])
      );
      console.log("hellowss", q);
      const querySnapshot = await getDocs(q);
      if (querySnapshot?.size > 0) {
        querySnapshot.forEach((doc) => {
          resolve({ id: doc.id, data: doc.data() });
        });
      } else {
        resolve(404);
      }
    } catch (e) {
      console.log("here", e.message);
      resolve(404);
      // reject(e);
      // dispatch({ type: GET_ERRORS, payload: e.message });
    }
  });
};

export const sendMessage = (data, id) => async (dispatch) => {
  return new Promise(async (resolve, reject) => {
    try {
      const db = getFirestore();
      const chatRef = doc(db, "chats", id);
      await updateDoc(chatRef, data)
        .then((res) => {
          resolve(res);
        })
        .catch((e) => {
          reject(e);
        });
    } catch (e) {
      console.log(e.message);
      reject(e);
      dispatch({ type: GET_ERRORS, payload: e.message });
    }
  });
};

export const updateStatus = (data, id) => async (dispatch) => {
  return new Promise(async (resolve, reject) => {
    try {
      const db = getFirestore();
      const chatRef = doc(db, "chats", id);
      await updateDoc(chatRef, data)
        .then((res) => {
          resolve(res);
        })
        .catch((e) => {
          reject(e);
        });
    } catch (e) {
      console.log(e.message);
      reject(e);
      dispatch({ type: GET_ERRORS, payload: e.message });
    }
  });
};

export const getMyChats = () => async (dispatch) => {
  return new Promise(async (resolve, reject) => {
    try {
      const db = getFirestore();
      const user = getAuth().currentUser;
      const q = query(
        collection(db, "chats"),
        where("JoinedUsers", "array-contains", user?.uid)
      );
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        let data = [];
        querySnapshot.forEach((doc) => {
          let d = { ...doc.data(), id: doc.id };
          data.push(d);
        });
        resolve(data);
        dispatch({ type: GET_ALL_CHATS, payload: data });
      });
    } catch (e) {
      console.log(e.message);
      reject(e);
      dispatch({ type: GET_ERRORS, payload: e.message });
    }
  });
};

export const createRelation = (data) => async (dispatch) => {
  return new Promise(async (resolve, reject) => {
    try {
      const db = getFirestore();
      const docRef = await addDoc(collection(db, "chats"), data);
      console.log("hereeess");
      //   const userRef1 = doc(db, "users", data?.reciever_details?.userId);
      //   const userRef2 = doc(db, "users", data?.sender_details?.id);
      //   let r_contacts = data?.reciever_details?.contacts || [];
      //   let s_contacts = data?.data?.sender_details?.contacts || [];
      //   console.log(data?.reciever_details?.userId, data?.sender_details?.id);
      //   await updateDoc(userRef1, {
      //     contacts: [...r_contacts, data?.sender_details?.id],
      //   });
      //   await updateDoc(userRef2, {
      //     contacts: [...s_contacts, data?.reciever_details?.id],
      //   });

      if (docRef?.id) {
        resolve(docRef.id);
      } else {
        reject(null);
      }
    } catch (e) {
      reject(e);
      dispatch({ type: GET_ERRORS, payload: e.message });
    }
  });
};
