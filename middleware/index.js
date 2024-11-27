import { useWindowDimensions } from "react-native";

import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";
export const FontsConfig = {
  Black: require("../assets/fonts/Poppins-Black.ttf"),
  Bold: require("../assets/fonts/Poppins-Bold.ttf"),
  ExtraBold: require("../assets/fonts/Poppins-ExtraBold.ttf"),
  Light: require("../assets/fonts/Poppins-Light.ttf"),
  Medium: require("../assets/fonts/Poppins-Medium.ttf"),
  Regular: require("../assets/fonts/Poppins-Regular.ttf"),
  SemiBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
};

export const sideMenuOptions = [
  {
    icon: require("../assets/sidemenu/3.png"),
    title: "Requests",
    screenName: "Request",
  },
  {
    icon: require("../assets/sidemenu/1.png"),
    title: "Settings",
    screenName: "Settings",
  },
  {
    icon: require("../assets/sidemenu/2.png"),
    title: "Edit profile",
    screenName: "Editprofile",
  },
  {
    icon: require("../assets/sidemenu/3.png"),
    title: "About Us",
    screenName: "Aboutus",
  },
  {
    icon: require("../assets/sidemenu/4.png"),
    title: "Help and Support",
    screenName: "Complain",
  },
  {
    icon: require("../assets/sidemenu/5.png"),
    title: "Notification Settings",
    screenName: "Notifications",
  },
  {
    icon: require("../assets/sidemenu/6.png"),
    title: "Contact & FAQ",
    screenName: "Complain",
  },
  {
    icon: require("../assets/sidemenu/7.png"),
    title: "Logout",
    screenName: "Logout",
  },
];

export const get12FormatTime = (time) => {
  const timeString12hr = new Date(
    "1970-01-01T" + time + "Z"
  ).toLocaleTimeString("en-US", {
    timeZone: "UTC",
    hour12: true,
    hour: "numeric",
    minute: "numeric",
  });
  return timeString12hr;
};

export const MenuItems = [
  {
    icon: "addPath",
    Title: "Demo",
  },
];

export const getDimension = () => {
  let { width, height } = useWindowDimensions();
  return { width, height };
};

export const getPercent = (percent, total) => {
  return (percent / 100) * total;
};

export const Calendar = {
  months: [
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  days: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
};

export const toSeconds = (hours, minutes, seconds) => {
  return hours * 3600 + minutes * 60 + seconds;
};

export const toHMS = (seconds) => {
  return new Date(seconds * 1000).toISOString().slice(11, 19);
};

export const toHMS_OBJ = (seconds) => {
  let time = new Date(seconds * 1000).toISOString().slice(11, 19);
  let newObj = time.split(":");
  return { hours: newObj[0], minutes: newObj[1], seconds: newObj[2] };
};

export const formatDate = (date) => {
  let formattedDate = new Date(date);
  formattedDate = `${formattedDate.getDate()}-${formattedDate.getMonth() + 1
    }-${formattedDate.getFullYear()} `;
  return formattedDate;
};

export const getTimeOnly = (date) => {
  let formattedTime = new Date(date).toLocaleTimeString("en-US", {
    timeZone: "UTC",
    hour12: true,
    hour: "numeric",
    minute: "numeric",
  });
  // formattedTime = `${formattedTime.getHours()}:${formattedTime.getMinutes()}-${formattedTime.getFullYear()} `;
  return formattedTime;
};

// declare all characters
const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export const generateRandomString = (length) => {
  let result = " ";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const firebaseImageUpload = (url) => {
  return new Promise(async (resolve, reject) => {
    try {
      let imageId = generateRandomString(30);
      const storage = getStorage();
      const response = await fetch(url);
      const blob = await response.blob();
      const storageRef = ref(storage, imageId + ".jpg");
      const uploadTask = uploadBytesResumable(storageRef, blob);
      // Listen for state changes, errors, and completion of the upload.
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          reject({ msg: e.message, code: 500 });
          switch (error.code) {
            case "storage/unauthorized":
              console.log("User doesn't have permission to access the object");
              break;
            case "storage/canceled":
              console.log("User canceled the upload");
              break;
            case "storage/unknown":
              console.log(
                "Unknown error occurred, inspect error.serverResponse"
              );
              break;
          }
        },
        () => {
          // Upload completed successfully, now we can get the download URL
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve({ url: downloadURL, code: 200 });
            console.log("File available at", downloadURL);
            //perform your task
          });
        }
      );
    } catch (e) {
      reject(e);
    }
  });
};

export const carsData = {
  make: ["Audi", "BMW", "Mercedes"],
  model: ["A", "B", "C", "D"],
  variant: ["TZ", "DB", "CD", "DX"],
  type: ["Sidan", "Fourwheel", "HighWheel"],
  transmission: ["Manual", "Auto"],
  engineType: ["Manual", "Auto"],
  seatingCapacity: [1, 2, 3, 4, 5, 6, 7],
  transportType: ["car", "bus", "cycle", "bike"],
};

export const transportTypes = [
  {
    type: "Cars",
    img: require("../assets/images/Car.png"),
    id: "car",
  },
  {
    type: "Bus",
    img: require("../assets/images/bus.png"),
    id: "bus",
  },
  {
    type: "Cycle",
    img: require("../assets/images/Cycle.png"),
    id: "cycle",
  },
  {
    type: "Taxi",
    img: require("../assets/images/Taxi.png"),
    id: "taxi",
  },
];

export const validatePassword = (pass, confirmPass) => {
  return new Promise(async (resolve, reject) => {
    let validator = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (pass !== confirmPass) {
      reject({ message: "Password and Confirm Password does not match" });
    } else if (pass?.length < 6) {
      reject({
        message: "Password must contain 6 characters",
      });
    } else if (!validator.test(pass)) {
      reject({
        message: "Password must contain at least a number and alphabet",
      });
    } else {
      resolve({ message: "success" });
    }
  });
};
