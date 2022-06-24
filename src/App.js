import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Template from '../src/template/Template';
import Chat from 'views/chat/Chat';
import Home from 'views/home/Home';
import userService from 'api/userService';
import './App.scss';
const chats = require('./constants/chats.json');

function App() {
  const dispatch = useDispatch();

  //mock only for axon test
  //IF HAVE API USE THIS....
  // useEffect(() => {
  //   return userService
  //     .get()
  //     .then((result) => {
  //       dispatch({
  //         type: 'user/profile',
  //         payload: result,
  //       });
  //     })
  //     .catch((e) => {
  //       return e;
  //     })
  //     .finally();
  // }, []);

  //IF DON'T HAVE API
  useEffect(() => {
    dispatch({
      type: 'user/profile',
      payload: localStorage.getItem('profile')
        ? JSON.parse(localStorage.getItem('profile'))
        : {},
    });
    if (
      JSON.parse(localStorage.getItem('chats')) &&
      !JSON.parse(localStorage.getItem('chats')).length
    ) {
      localStorage.setItem('chats', JSON.stringify(chats));
    }
    dispatch({ type: 'chat/setChats', payload: chats });
  });

  return (
    <BrowserRouter>
      <Template>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </Template>
    </BrowserRouter>
  );
}

export default App;
