import { doc, getDoc, getFirestore } from "firebase/firestore";
import { GET_ERRORS, GET_USER_DETAILS } from "../types/types";

export const getUserDetails = (id, setLoading) => async (dispatch) => {
    try {
        const db = getFirestore();
        const docRef = doc(db, "users", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            setLoading(false);
            dispatch({ type: GET_USER_DETAILS, payload: docSnap.data() });
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
            setLoading(false);
        }
    } catch (e) {
        setLoading(false);
        dispatch({ type: GET_ERRORS, payload: e.message });
    }
};