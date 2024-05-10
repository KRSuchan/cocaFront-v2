// App.js
import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage'; // 로그인 페이지 컴포넌트
import MainPage from './MainPage'; // 메인 페이지 컴포넌트
import SignUp from './SignupPage'; //회원가입 페이지
import GroupPage from './GroupPage' // 그룹페이지

function App() {
  return (
    <Router>
      <Helmet>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lexend+Zetta&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap" />
      </Helmet>
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/group' element={<GroupPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
