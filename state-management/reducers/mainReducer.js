import {
  GET_USER_DETAILS,
  GET_ALL_JOURNEYS,
  GET_ALL_USERS,
  GET_CURRENT_JOURNEY,
  GET_ALL_CHATS,
} from "../types/types";
const initialState = {
  get_user_details: null,
  get_all_journeys: null,
  get_all_users: null,
  get_current_journey: null,
  get_all_chats: null,
};
const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_DETAILS:
      return {
        ...state,
        get_user_details: action.payload,
      };
    case GET_ALL_USERS:
      return {
        ...state,
        get_all_users: action.payload,
      };
    case GET_ALL_JOURNEYS:
      return {
        ...state,
        get_all_journeys: action.payload,
      };
    case GET_CURRENT_JOURNEY:
      return {
        ...state,
        get_current_journey: action.payload,
      };

    case GET_ALL_CHATS:
      return {
        ...state,
        get_all_chats: action.payload,
      };
    default:
      return state;
  }
};
export default mainReducer;
