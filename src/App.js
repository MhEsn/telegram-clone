import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Template from '../src/template/Template';
import ChatView from 'views/chat/ChatView';
import HomeView from 'views/home/HomeView';
import userService from 'api/userService';
import './App.scss';
const chats = require('./constants/chats.json');

function App() {
  const dispatch = useDispatch();

  //mock only for axon test
  //WITH API USE THIS....
  // useEffect(() => {
  //   return userService
  //     .get()
  //     .then((result) => {
  //       dispatch({
  //         type: 'user/profile',
  //         payload: result,
  //       });
  //     }).then(()=>{
  //        return ChatService.list()
  //     }).then((result)=>{
  //        dispatch({type:'chat/setChats',payload:result});
  //     })
  //     .catch((e) => {
  //       return e;
  //     })
  //     .finally();
  // }, []);

  //WITHOUT API
  useEffect(() => {
    dispatch({
      type: 'user/profile',
      payload: localStorage.getItem('profile')
        ? JSON.parse(localStorage.getItem('profile'))
        : {},
    });
    if (
      JSON.parse(localStorage.getItem('chats')) &&
      JSON.parse(localStorage.getItem('chats')).length
    ) {
      dispatch({
        type: 'chat/setChats',
        payload: JSON.parse(localStorage.getItem('chats')),
      });
    } else {
      localStorage.setItem('chats', JSON.stringify(chats));
      dispatch({ type: 'chat/setChats', payload: chats });
    }
  });

  return (
    <BrowserRouter>
      <Template>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/chat/:id" element={<ChatView />} />
        </Routes>
      </Template>
    </BrowserRouter>
  );
}

export default App;
