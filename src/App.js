import React, { useRef, useState } from "react";
import { scrollIntoView } from "seamless-scroll-polyfill";
import {db} from "./firebase"
import {addDoc, collection} from '@firebase/firestore'

import "./App.css";
import Greatings from "./components/Greatings";
import Info from "./components/Info";
import Invite from "./components/Invite";
import Final from "./components/Final";

function App() {
  const refInfo = useRef(null);

  const handleClick = () => {
    scrollIntoView(document.querySelector(".infoBlock"), {
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  };
  const handleClickToFinal = () => {
    scrollIntoView(document.querySelector(".finalBlock"), {
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  };

  const [form, setForm] = useState(false);
  const [final, setFinal] = useState(false);
  const [sex, setSex] = useState(true);
  const refInvite = useRef(null);
  const showForm = () => {
    setForm(true);
    console.log(form);
    setTimeout(() => moveToBlock(), 500);
  };
  const moveToBlock = () => {
    // refInvite.current?.scrollBy({ top: 100, left: 0, behavior: 'smooth' });
    scrollIntoView(document.querySelector(".inviteBlock"), {
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
    console.log(123);
  };
  function toggleSex() {
    setSex(!sex);
    console.log(sex);
  }
  function showFinalBlock(data) {
    setFinal(true);
    console.log("setFinal: ", final);
    setTimeout(() => handleClickToFinal(), 500);
    sendData(data)
  }

  function sendData(data){
    // e.preventDefault();
    const guestData = {...data, date: new Date().toLocaleDateString()};
    // console.log(nameData.current.value,surnameData.current.value );
    console.log('guestData: ', guestData);
    addDoc(collection(db, "Guests"), guestData);
}
  


  return (
    <div className="App">
      <Greatings handleClick={handleClick} />
      <Info refInfo={refInfo} showForm={showForm} />
      <Invite
        refInvite={refInvite}
        status={form}
        toggleSex={toggleSex}
        showFinalBlock={showFinalBlock}
        handleClickToFinal={handleClickToFinal}
      />
      <Final sex={sex} final={final} />
    </div>
  );
}

export default App;
