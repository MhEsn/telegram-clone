import React from 'react';
import styles from './Chat.module.scss';
import ChatHeader from './components/chatHeader/ChatHeader';

function Chat(props) {
  return (
    <div className={styles.container}>
      <ChatHeader />
    </div>
  );
}

export default Chat;
