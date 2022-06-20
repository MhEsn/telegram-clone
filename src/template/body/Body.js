import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Content from './components/content/Content';
import styles from './Body.module.scss';

function Body({ children }) {
  return (
    <div className={styles.container}>
      <Sidebar />
      <Content>{children}</Content>
    </div>
  );
}

export default Body;
