import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Template from '../src/template/Template';
import Chat from 'views/chat/Chat';
import './App.scss';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'user/profile',
      payload: localStorage.getItem('profile')
        ? JSON.parse(localStorage.getItem('profile'))
        : {},
    });
  });

  return (
    <BrowserRouter>
      <Template>
        <Routes>
          <Route path="/" element={<Chat />} />
        </Routes>
      </Template>
    </BrowserRouter>
  );
}

export default App;
