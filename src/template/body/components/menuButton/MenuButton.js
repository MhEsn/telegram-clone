import React from 'react';
import Button from 'assets/images/hamburger-icon.svg';
import styles from './MenuButton.module.scss';

function MenuButton() {
  return (
    <div className={styles.container}>
      <img src={Button} alt="MenuIcon" />
    </div>
  );
}

export default MenuButton;
