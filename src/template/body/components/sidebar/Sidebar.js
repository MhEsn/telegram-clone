import React from 'react';
import SidebarContent from '../sidebarContent/SidebarContent';
import SidebarHeader from '../sidebarHeader/SidebarHeader';
import styles from './Sidebar.module.scss';

function Sidebar() {
  return (
    <div className={styles.container}>
      <SidebarHeader />
      <SidebarContent />
    </div>
  );
}

export default Sidebar;
