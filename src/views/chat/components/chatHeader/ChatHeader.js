import React from 'react';
import ProfilePlaceHolder from 'assets/images/profileImagePlaceholder.png';
import styles from './ChatHeader.module.scss';

function ChatHeader(props) {
  return (
    <div className={styles.header}>
      <img
        src={props.profileImage ? props.profileImage : ProfilePlaceHolder}
        className={styles.profileImage}
        alt="profileImage"
      />
      <div className={styles.content}>
        <label className={styles.userLabel}>
          {props.userName ? props.userName : 'Unkown'}
        </label>
        <label className={styles.timeLabel}>
          {props.status ? props.status : 'last seen recently'}
        </label>
      </div>
    </div>
  );
}
export default ChatHeader;
