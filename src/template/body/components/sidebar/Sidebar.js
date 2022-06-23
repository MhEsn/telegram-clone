import React from 'react';
import SidebarContent from '../sidebarContent/SidebarContent';
import styles from './Sidebar.module.scss';

function Sidebar() {
  return (
    <div className={styles.container}>
      <SidebarContent />
    </div>
  );
}

export default Sidebar;
