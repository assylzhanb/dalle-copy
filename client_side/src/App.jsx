import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Footer from './scenes/Footer';
import Home from './pages/Home';
import MakePost from './pages/MakePost';
import Navbar from './scenes/Navbar';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc[100vh-73px)]">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/make-post' element={<MakePost />} />
          </Routes>
        </main>
      </BrowserRouter>
      <div className='grid align-bottom'>
        <Footer />
      </div>
    </div>

  );
}

export default App;