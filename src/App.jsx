import './App.css';
import { useState } from 'react';
import Home from './components/Home';
import HeaderLeft from './components/HeaderLeft';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      document.documentElement.classList.toggle("dark", newMode);
      return newMode;
    });
  };

  return (
    <div className={`min-h-screen w-full flex flex-col sm:flex-row subpixel-antialiased ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}>
      <HeaderLeft darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Home />
    </div>
  );
}

export default App;
