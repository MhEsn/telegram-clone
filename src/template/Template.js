import React from 'react';
import Header from './header/Header';
import Body from './body/Body';
import styles from './StyxTemplate.module.scss';

function StyxTemplate({ children }) {
  return (
    <div id={styles.container}>
      <Body>{children}</Body>
    </div>
  );
}

export default StyxTemplate;
