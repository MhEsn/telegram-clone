import React from 'react';
import { useSelector } from 'react-redux';
import SidebarUserInfo from './components/user-info/SidebarUserInfo';
import SidebarMenu from './components/menu/SidebarMenu';
import styles from './Sidebar.module.scss';

function SidebarOpen() {
  const isSidebarCollapsed = useSelector(
    (state) => state.app.isSidebarCollapsed
  );

  return (
    <div
      className={`${styles.container} ${
        isSidebarCollapsed ? styles.collapsed : ''
      }`}
    >
      {!isSidebarCollapsed && <SidebarUserInfo />}
      <SidebarMenu collapsed={isSidebarCollapsed} />
    </div>
  );
}

export default SidebarOpen;
