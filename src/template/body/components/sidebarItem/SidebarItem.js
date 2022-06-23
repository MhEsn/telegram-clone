import React from 'react';
import styles from './SidebarItem.module.scss';

function SidebarItem({ profileImage, userName, previewText }) {
  return (
    <div className={styles.container}>
      <img src={profileImage} className={styles.profileImage} />
      <div className={styles.content}>
        <label className={styles.userName}>{userName}</label>
        <label className={styles.previewText}>{previewText}</label>
      </div>
    </div>
  );
}

export default SidebarItem;
