import React, { useEffect } from 'react';
import Navbar from './components/Navbar';

function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "script.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []);
  return (
    <>
      <Navbar/>
    </>
  );
}

export default App;