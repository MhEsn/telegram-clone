import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ChatHeader from './components/chatHeader/ChatHeader';
import ChatContent from './components/chatContent/ChatContent';
import ChatFooter from './components/chatFooter/ChatFooter';
import styles from './Chat.module.scss';

function Chat() {
  const { selectedChat } = useSelector((state) => {
    return state.chat;
  });
  const dispatch = useDispatch();
  const [message, setMessage] = useState();
  //mock
  // useEffect(() => {
  //   chatService.get(id).then((result) => {
  //     dispatch({ action: 'chat/selectedChat', payload: result });
  //   }).catch((e)=>{
  //     return e;
  //   }).finally();
  // }, []);
  function sendMessage(event) {
    //some parameters here should handle in backend or db but because it is mock
    //app will set some value for them like date
    event.preventDefault();
    selectedChat.chats.push({
      id: Math.random(),
      content: message,
      date: Date.now(),
      type: 1,
    });
    dispatch({
      action: 'chat/sendMessage',
      payload: selectedChat,
    });
  }
  function handleMessage(event) {
    setMessage(event.target.value);
  }

  return (
    <div className={styles.container}>
      <ChatHeader
        userName={selectedChat.userName}
        profileImage={selectedChat.profileImage}
      />
      <ChatContent chats={selectedChat.chats} />
      <ChatFooter
        message={message}
        handleMessage={handleMessage}
        sendMessage={sendMessage}
      />
    </div>
  );
}

export default Chat;
