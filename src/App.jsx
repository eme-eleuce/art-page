import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import Path1 from './components/path/Path1';
import Path2 from './components/path/Path2';
import Path3 from './components/path/Path3';
import Path4 from './components/path/Path4';
import Section from './components/Section';




function App() {
   
  return (
    <div>
     <Routes>
       <Route path='/' element={<Hero />} />
       <Route path='/section' element={<Section />} />
       <Route path='/path1' element={<Path1 />} />
       <Route path='/path3' element={<Path3 />} />
       <Route path='/path4' element={<Path4 />} />
      </Routes>
    </div>
  ) 
}

export default App
