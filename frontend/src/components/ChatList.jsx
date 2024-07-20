import React, { useEffect, useRef } from "react";

const ChatList = ({ chats }) => {
  console.log(chats, "chats");
  const user = localStorage.getItem("user");
  const endOfMessages = useRef();

  const SenderChat = ({ key, message, username, avatar }) => {
    return (
      <div key={key} className="chat_sender">
        <img src={avatar} alt="" />
        <p>
          <strong>{username}</strong>
          {message}
        </p>
      </div>
    );
  };

  const ReceiverChat = ({ key, message, username, avatar }) => {
    return (
      <div key={key} className="chat_receiver">
        <img src={avatar} alt="" />
        <p>
          <strong>{username}</strong>
          {message}
        </p>
      </div>
    );
  };

  useEffect(() => {
    scrollToBottom();
  }, [chats]);

  const scrollToBottom = () => {
    endOfMessages.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  return (
    <div className="chats_list">
      {chats.map((chat, index) => {
        if (chat.user === user) {
          return (
            <SenderChat
              key={index}
              message={chat.message}
              username={chat.user}
              avatar={chat.avatar}
            />
          );
        } else {
          return (
            <ReceiverChat
              key={index}
              message={chat.message}
              username={chat.user}
              avatar={chat.avatar}
            />
          );
        }
      })}
      <div ref={endOfMessages}></div>
    </div>
  );
};

export default ChatList;
