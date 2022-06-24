import React from 'react';
import { useSelector } from 'react-redux';
import Profile from 'views/profile/Profile';
import SidebarContent from '../sidebarContent/SidebarContent';
import SidebarHeader from '../sidebarHeader/SidebarHeader';
import styles from './Sidebar.module.scss';

function Sidebar() {
  const isProfileVisible = useSelector((state) => {
    return state.app.isProfileVisible;
  });
  return (
    <div className={styles.container}>
      <SidebarHeader />
      {!isProfileVisible ? <SidebarContent /> : <Profile />}
    </div>
  );
}

export default Sidebar;
