import axios from "axios";
import store from "../store";
import { GET_ERRORS, SKELETON_LOADING } from "../types/types";
import { firebaseImageUpload } from "../../middleware";
import { SignOutAuto } from "./auth";
import { Quikify } from "quikify";

export const setSkeletonLoader = async (status) => {
  store.dispatch({ type: SKELETON_LOADING, payload: status });
};

export const _run_api = async (props) => {
  return new Promise((resolve, reject) => {
    try {
      axios
        .get(props?.endpoint)
        .then((res) => {
          store.dispatch({ type: props?.type, payload: res.data });
          resolve(res.data);
        })
        .catch((e) => {
          if (e.response.status == 403) {
            SignOutAuto();
            return;
          }
          reject(e);
        });
    } catch (e) {
      store.dispatch({ type: GET_ERRORS, payload: e });
      reject(e);
    }
  });
};

const _createWithRawData = (props) => {
  return new Promise(async (resolve, reject) => {
    try {
      axios
        .post(props?.endpoint, props?.data)
        .then((res) => {
          let data = res.data?.created_data || res.data?.updated_data;
          store.dispatch({ type: props?.type, payload: data });
          resolve(data);
        })
        .catch((e) => {
          if (e.response.status == 403) {
            SignOutAuto();
            return;
          }

          reject(e);
        });
    } catch (e) {
      store.dispatch({ type: GET_ERRORS, payload: e.message });
      reject(e);
    }
  });
};

export const _run_create_api = async (props) => {
  return new Promise(async (resolve, reject) => {
    try {
      let images = props?.data?.images || {};
      let data = props?.data;
      let imageValues = Object?.values(images) || {};
      let imagekeys = Object?.keys(images) || {};
      if (!Object?.values(images).includes(null) && props?.data?.images) {
        let promises = imageValues?.map(async (item, index) => {
          return await firebaseImageUpload(item)
            .then((res) => {
              return res;
            })
            .catch((e) => {
              console.log(e);
            });
        });
        Promise.all(promises)
          .then(function (results) {
            results?.map((item, index) => {
              data[imagekeys[index]] = item?.url;
            });
            delete data?.images;
            props["data"] = data;
            _createWithRawData(props)
              .then((res) => {
                resolve(res);
              })
              .catch((e) => {
                reject(e);
              });
          })
          .catch((e) => {
            reject(e);
          });
      } else {
        _createWithRawData(props)
          .then((res) => {
            resolve(res);
          })
          .catch((e) => {
            reject(e);
          });
      }
    } catch (e) {
      store.dispatch({ type: GET_ERRORS, payload: e.message });
      reject(e);
    }
  });
};

export const getAll = (table, type, setLoading) => async (dispatch) => {
  // const querySnapshot = await getDocs(collection(db, table));
  // querySnapshot.forEach((doc) => {
  //   console.log(doc.id, " => ", doc.data());
  // });
};

// export const _run_api_realtime = async (props) => {
//   return new Promise((resolve, reject) => {
//     try {
//       const db = getFirestore();
//       const q = query(collection(db, props?.table), where("user", "==", props?.id));
//       const unsubscribe = onSnapshot(q, (querySnapshot) => {
//         const data = [];
//         querySnapshot.forEach((doc) => {
//           data.push(doc.data());
//         });
//         resolve(data)
//         store.dispatch({ type: props?.type, payload: data })
//       });
//     } catch (e) {
//       store.dispatch({ type: GET_ERRORS, payload: e });
//       reject(e);
//     }
//   });
// };

const _updateWithRawData = (props) => {
  return new Promise(async (resolve, reject) => {
    try {
      Quikify.put(props?.endpoint, props?.data)
        .then((res) => {
          // console.log("hellw", res?.data);
          // console.log("hellw", res?.data?.all_data);
          store.dispatch({ type: props?.type, payload: res?.data?.all_data });

          resolve(res.data);
        })
        .catch((e) => {
          if (e.response.status == 403) {
            SignOutAuto();
            return;
          }
          reject(e);
        });
    } catch (e) {
      store.dispatch({ type: GET_ERRORS, payload: e });
      reject(e);
    }
  });
};

export const _run_update_api = async (props) => {
  return new Promise(async (resolve, reject) => {
    try {
      let images = props?.data?.images || {};
      let data = props?.data || {};
      let imageValues = Object?.values(images) || {};
      let imagekeys = Object?.keys(images) || {};
      if (!Object?.values(images)?.includes(null)) {
        let promises = imageValues?.map(async (item, index) => {
          return await firebaseImageUpload(item)
            .then((res) => {
              return res;
            })
            .catch((e) => {
              console.log(e);
            });
        });
        Promise.all(promises)
          .then(function (results) {
            results?.map((item, index) => {
              data[imagekeys[index]] = item?.url;
            });
            delete data.images;
            props["data"] = data;
            _updateWithRawData(props)
              .then((res) => {
                console.log(res);

                resolve(res);
              })
              .catch((e) => {
                console.log(e);
                reject(e);
              });
          })
          .catch((e) => {
            reject(e);
          });
      }
    } catch (e) {
      store.dispatch({ type: GET_ERRORS, payload: e.message });
      reject(e);
    }
  });
};
