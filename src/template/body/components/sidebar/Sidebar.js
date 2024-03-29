import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import ProfileView from 'views/profile/ProfileView';
import SidebarContent from '../sidebarContent/SidebarContent';
import SidebarHeader from '../sidebarHeader/SidebarHeader';
import styles from './Sidebar.module.scss';

function Sidebar() {
  const navigate = useNavigate();
  const isProfileVisible = useSelector((state) => {
    return state.app.isProfileVisible;
  });
  const { chats } = useSelector((state) => {
    return state.chat;
  });
  const dispatch = useDispatch();

  function selectChat(id) {
    chats.map((item) => {
      if (item.id === id) {
        dispatch({ type: 'chat/selectedChat', payload: item });
        navigate(`/chat/${item.id}`);
      }
    });
  }
  return (
    <div className={styles.container}>
      <SidebarHeader />
      {!isProfileVisible ? (
        <SidebarContent selectChat={selectChat} data={chats} />
      ) : (
        <ProfileView />
      )}
    </div>
  );
}

export default Sidebar;
