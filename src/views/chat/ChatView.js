import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ChatHeader from './components/chatHeader/ChatHeader';
import ChatContent from './components/chatContent/ChatContent';
import ChatFooter from './components/chatFooter/ChatFooter';
import styles from './ChatView.module.scss';

function ChatView() {
  const { selectedChat } = useSelector((state) => {
    return state.chat;
  });
  const { chats } = useSelector((state) => {
    return state.chat;
  });
  const dispatch = useDispatch();
  const params = useParams();
  const [message, setMessage] = useState();
  //mock
  // useEffect(() => {
  //   chatService.get(id).then((result) => {
  //     dispatch({ action: 'chat/selectedChat', payload: result });
  //   }).catch((e)=>{
  //     return e;
  //   }).finally();
  // }, []);
  useEffect(() => {
    return getData();
  }, []);
  function sendMessage(event) {
    //some parameters here should handle in backend or db but because it is mock
    //app will set some value for them like date
    Promise.resolve()
      .then(() => {
        event.preventDefault();
        dispatch({
          type: 'chat/sendMessage',
          payload: {
            id: Math.floor(Math.random() * 1000),
            content: message,
            date: Date.now(),
            type: 1,
          },
        });
        setMessage('');
      })
      .then(() => {
        localStorage.setItem('chats', JSON.stringify(chats));
      });
  }
  function handleMessage(event) {
    setMessage(event.target.value);
  }
  function getData() {
    if (params.id) {
      JSON.parse(localStorage.getItem('chats')).map((item) => {
        if (item.id === parseInt(params.id)) {
          dispatch({ type: 'chat/selectedChat', payload: item });
        }
      });
    }
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

export default ChatView;
