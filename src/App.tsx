import React, { useEffect } from 'react';
import Home from './components/Home';

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
      <Home/>
    </>
  );
}

export default App;