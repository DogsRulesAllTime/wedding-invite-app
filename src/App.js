import React,{useRef} from 'react';
import './App.css';
import Greatings from './components/Greatings';
import Info from './components/Info';
import Invite from './components/Invite';

function App() {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <div className="App">
      <Greatings handleClick={handleClick}/>
      <Info gg={ref}/>
      <Invite/>
    </div>
  );
}

export default App;
