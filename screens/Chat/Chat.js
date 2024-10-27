import { useEffect, useMemo, useRef, useState } from "react";
import {
  Text,
  View,
  useWindowDimensions,
  Image,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Chat/main";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { getPercent } from "../../middleware";
import Notificationsheader from "../Notifications/components/Notificationsheader";
import Incomingmsg from "./components/Incomingmsg";
import Outgoingmsg from "./components/Outgoingmsg";
import { light } from "../../scheme";
import {
  createRelation,
  getRelation,
  sendMessage,
} from "../../state-management/features/chat";
import { getAuth } from "firebase/auth";
import { doc, getFirestore, onSnapshot } from "firebase/firestore";
const Chat = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  const [ismsgtyped, setIsmsgtyped] = useState("");

  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const [keyboardHeight, setKeyboardHeight] = useState(null);

  // Chats
  let otherUserData = props?.route?.params?.data;

  let currentUserId = getAuth().currentUser?.uid;
  let currentUser = { ...props?.get_user_details };
  let usersIds = [
    otherUserData?.id + currentUserId,
    currentUserId + otherUserData?.id,
  ];
  const [loading, setLoading] = useState(true);
  const [sendingMessageLoading, setSendingMessageLoading] = useState(false);
  const [messageText, setMessageText] = useState("");
  const [chatRelation, setChatRelation] = useState(null);
  const [imageViewer, setImageViewer] = useState(false);
  const [imageViewerLoading, setImageViewerLoading] = useState(true);
  const [chatData, setChatData] = useState(null);
  const [messages, setMessages] = useState([]);
  const [imageUploadProgress, setImageUploadProgress] = useState(null);
  const [images, setImages] = useState(null);
  const [isRelationUpdated, setIsRelationUpdated] = useState(null);
  const scrollRef = useRef();

  useEffect(() => {
    if (chatRelation == null) {
      props
        ?.getRelation(usersIds)
        .then((res) => {
          if (res == 404) {
            console.log("here");
            let _newChatData = {
              users: usersIds,
              messages: [],
              JoinedUsers: [otherUserData?.userId, currentUserId],
              reciever_details: otherUserData,
              sender_details: currentUser,
              lastMessage: null,
              created_at: new Date().toLocaleTimeString(),
            };
            props
              ?.createRelation(_newChatData)
              .then((res) => {
                setIsRelationUpdated(true);
              })
              .catch((e) => {
                console.log(e);
              });
          } else {
            setLoading(false);
            setChatRelation(res);
          }
        })
        .catch((e) => console.log(e));
    }
  }, [isRelationUpdated]);

  // useEffect(() => {
  //   if (chatRelation != null) {
  //     const db = getFirestore();
  //     const unsub = onSnapshot(doc(db, "chats", chatRelation?.id), (doc) => {
  //       console.log("You are connected to chat.");
  //       setMessages(doc.data()?.messages);
  //       setLoading(false);
  //     });
  //     return () => unsub();
  //   }
  // }, [chatRelation]);

  // let memiozedMessages = useMemo(() => {
  //   return messages;
  // }, [messages]);

  // const onSend = async () => {
  //   console.log(images);
  //   if (messageText === "" && images === null) return;
  //   if (sendingMessageLoading) return;
  //   setSendingMessageLoading(true);
  //   let messageObj = {
  //     sender: currentUserId,
  //     reciever: otherUserData?.userId,
  //     message: messageText,
  //     images: images,
  //     sent: false,
  //     created_at: new Date().toLocaleTimeString(),
  //   };
  //   let prevM = messages;
  //   let _tempLiveImages = [];

  //   let chatData = {
  //     lastMessage: messageText || "Sent an image.",
  //     messages: prevM,
  //     created_at: new Date().toLocaleTimeString(),
  //   };

  //   if (!chatRelation) return;

  //   let promises = images?.map(async (item, index) => {
  //     return await firebaseImageUpload(item?.uri, null, setImageUploadProgress)
  //       .then((res) => {
  //         return res;
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //       });
  //   });

  //   if (images?.length > 0) {
  //     Promise.all(promises)
  //       .then(function (results) {
  //         results?.map((item, index) => {
  //           _tempLiveImages.push(item?.url);
  //         });
  //         setMessages((prev) => [...prev, messageObj]);
  //         messageObj["sent"] = true;
  //         prevM.push(messageObj);
  //         setMessageText("");
  //         setImages(null);
  //         messageObj["liveImages"] = _tempLiveImages;
  //         props
  //           ?.sendMessage(chatData, chatRelation?.id)
  //           .then((res) => {
  //             setImageUploadProgress(null);
  //             setSendingMessageLoading(false);
  //             console.log("Message Sent.", res);
  //           })
  //           .catch((e) => {
  //             console.log(e);
  //           });
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //       });
  //   } else {
  //     setMessages((prev) => [...prev, messageObj]);
  //     messageObj["sent"] = true;
  //     prevM.push(messageObj);
  //     setMessageText("");
  //     setImages(null);
  //     props
  //       ?.sendMessage(chatData, chatRelation?.id)
  //       .then((res) => {
  //         console.log("Message Sent.", res);
  //         setSendingMessageLoading(false);
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //       });
  //   }
  // };

  // const pickImage = async () => {
  //   // No permissions request is necessary for launching the image library
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.Images,
  //     allowsMultipleSelection: true,
  //     aspect: [4, 3],
  //     quality: 0,
  //   });
  //   if (!result.canceled) {
  //     setImages(result.assets);
  //   }
  // };

  // useEffect(() => {
  //   const showSubscription = Keyboard.addListener("keyboardDidShow", (e) => {
  //     setKeyboardStatus(true);
  //     setKeyboardHeight(e?.endCoordinates?.height);
  //   });
  //   const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
  //     setKeyboardStatus(false);
  //   });

  //   return () => {
  //     showSubscription.remove();
  //     hideSubscription.remove();
  //   };
  // }, []);

  return (
    <View style={styles.container}>
      <Notificationsheader title={"Chat"} navigation={props?.navigation} />
      {[1, 3, 3]?.map((item, index) => {
        return (
          <Incomingmsg
            key={index}
            image={require("../../assets/images/user.png")}
            incomingmsg={"Welcome to Car2go Customer Service"}
            time={"8:29 am"}
          />
        );
      })}
      {[1, 3, 3]?.map((item, index) => {
        return (
          <Outgoingmsg
            key={index}
            outgoingmsg={"Welcome to Car2go Customer Service"}
            time={"8:29 am"}
          />
        );
      })}
      <View style={styles.typemsgwrapper}>
        <TouchableOpacity style={styles.iconbody}>
          <Image
            source={require("../../assets/icons/plus.png")}
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <View style={styles.typemsgbody}>
          <TextInput
            style={styles.inputstyles}
            placeholder={"Type your message"}
            placeholderTextColor={light?.fieldtext}
            multiline
          />
          <TouchableOpacity style={styles.iconbody}>
            <Image
              source={require("../../assets/icons/send.png")}
              style={{ height: "100%", width: "100%" }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
  get_user_details: state.main.get_user_details,
});
export default connect(mapStateToProps, {
  getRelation,
  createRelation,
  sendMessage,
})(Chat);
