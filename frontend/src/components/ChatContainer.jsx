import React, { useEffect, useRef, useState } from "react";
import {FaPowerOff,FaYoutube,FaRegFaceLaughBeam } from "react-icons/fa6";
import "../style.css";
import ChatList from "./ChatList";
import InputText from "./InputText";
import UserLogin from "./UserLogin";
import socketIOClient from "socket.io-client";
import { useNavigate } from "react-router-dom";


const ChatContainer = () => {
  const [user, setUser] = useState(localStorage.getItem("user") || "none");
  const [chats, setChats] = useState([]);
  const socketio = socketIOClient("http://localhost:3001");
  const navigate = useNavigate()

  useEffect(() => {
    socketio.on("chat", (chats) => {
      setChats(chats);
    });  
    socketio.on('message',(msg) => {
      setChats((prevchat) => [...prevchat,msg])
    })

    return () => {
      socketio.off('chat')
      socketio.off('message')
    }
  },[]);

  const addMessage = (chat) => {
    const newChat = {
      user: localStorage.getItem("user"),
      message:chat,
      avatar: localStorage.getItem("avatar"),
    };
    socketio.emit('newMessage',newChat)
  };

  const logOut = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('avatar')
    setUser('')
    setChats([])
    navigate('/')
  }

  return (
    <div >
      {/* {user ? ( */}
        <div className="App">
          <div className="chats_header">
            <h4><FaRegFaceLaughBeam/> username: {user}</h4>
            {/* <p>
              <FaYoutube className="chats_icon" /> code with shiwangi
            </p> */}
            <p className="chats_logout" onClick={logOut}>
              <FaPowerOff/>
              <strong style={{marginLeft:'0.5rem'}}>logout</strong>
            </p>
          </div>
          <ChatList chats={chats} />
          <InputText addMessage={addMessage} />
        </div>
      {/* ) : (
        <UserLogin setUser={setUser} />
      )} */}
    </div>
  );
};

export default ChatContainer;
