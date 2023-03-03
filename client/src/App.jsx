import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { logo } from './assets;'
import Home from './pages/Home';
import MakePost from './pages/MakePost';


const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">
          <img src={logo} alt="logo" className="w-28 object-contain" />
        </Link>
        <Link to="/make-post" className="font-inter font-medium bg-my-purple text-white px-4 py-2 rounded-md">Generate</Link>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc[100vh-73px)]">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/make-post' element={<MakePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;