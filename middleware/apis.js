import {
  _run_api,
  _run_create_api,
  _run_update_api,
} from "../state-management/auth/features";
import { GET_USER_DETAILS } from "../state-management/types/types";

export const uni_apis = {
  get_user: (table) => {
    return _run_api({
      type: GET_USER_DETAILS,
      endpoint: `/${table}`,
    });
  },

  // update_user: (table, data) => {
  //   return _run_create_api({
  //     type: GET_USER_DETAILS,
  //     endpoint: `/${table}`,
  //     data: data,
  //   });
  // },
  update_user: (table, data, id) => {
    return _run_update_api({
      type: GET_USER_DETAILS,
      endpoint: `/${table}/${id}`,
      data: data,
    });
  },
};
