import React,{useRef, useState} from 'react';
import { scrollIntoView } from "seamless-scroll-polyfill";
 

import './App.css';
import Greatings from './components/Greatings';
import Info from './components/Info';
import Invite from './components/Invite';

function App() {
  const refInfo = useRef(null);


  const handleClick = () => {
    // refInfo.current?.scrollIntoView({behavior: 'smooth'});
    scrollIntoView(document.querySelector(".infoBlock"), { behavior: "smooth", block: "center", inline: "center" });
  };

  const [form, setForm] = useState(false)
  const refInvite = useRef(null);
  const showForm = () =>{
      setForm(true);
      console.log(form);
      setTimeout(()=>moveToBlock(), 500)  
  }
  const moveToBlock = () => {
    // refInvite.current?.scrollBy({ top: 100, left: 0, behavior: 'smooth' });
    scrollIntoView(document.querySelector(".inviteBlock"), { behavior: "smooth", block: "center", inline: "center" });
    console.log(123);
  };

  return (
    <div className="App">
      <Greatings handleClick={handleClick}/>
      <Info refInfo={refInfo}
       showForm={showForm}/>
      <Invite refInvite={refInvite} status={form}/>
    </div>
  );
}

export default App;
