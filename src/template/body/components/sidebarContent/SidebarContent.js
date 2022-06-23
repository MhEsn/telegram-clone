import React from 'react';
import SidebarItem from '../sidebarItem/SidebarItem';
import profileImage1 from 'assets/images/1.jpeg';
import profileImage2 from 'assets/images/2.jpeg';
import profileImage3 from 'assets/images/3.jpeg';
import profileImage4 from 'assets/images/4.jpeg';
import profileImage5 from 'assets/images/5.jpeg';
import profileImage6 from 'assets/images/6.jpeg';
import styles from './SidebarContent.module.scss';

const data = [
  {
    profileImage: profileImage1,
    userName: 'Jack',
    previewText: 'Hi, How you doing?',
  },
  {
    profileImage: profileImage2,
    userName: 'John',
    previewText: 'Hi, How you doing?',
  },
  {
    profileImage: profileImage3,
    userName: 'MH',
    previewText: 'Hi, How you doing?',
  },
  {
    profileImage: profileImage4,
    userName: 'Michel',
    previewText: 'Hi, How you doing?',
  },
  {
    profileImage: profileImage5,
    userName: 'Matt',
    previewText: 'Hi, How you doing?',
  },
  {
    profileImage: profileImage6,
    userName: 'Elaija',
    previewText: 'Hi, How you doing?',
  },
];

function SidebarContent() {
  return (
    <div className={styles.container}>
      {data.map((item) => {
        return (
          <SidebarItem
            profileImage={item.profileImage}
            userName={item.userName}
            previewText={item.previewText}
          />
        );
      })}
    </div>
  );
}

export default SidebarContent;
