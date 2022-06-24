import React from 'react';
import Body from './body/Body';
import styles from './Template.module.scss';

function Template({ children }) {
  return (
    <div id={styles.container}>
      <Body>{children}</Body>
    </div>
  );
}

export default Template;
