import React, { useState } from "react";
import "./inviteForm.css";
import MyInput from "./ui/MyInput";
import MyToggle from "./ui/MyToggle";

export default function InviteForm({
  status,
  refInvite,
  changeGuest,
  toggleClearState,
  toggleSex,
  showFinalBlock,
  userData
}) {
  const formStyle = status ? "formActive" : "formDisabled";

  const [additionalGuest, setAdditionalGuest] = useState(false);
  function toggleMove() {
    setAdditionalGuest(!additionalGuest);
    toggleClearState();
    console.log(additionalGuest);
  }
  const guestStyle = additionalGuest ? "visibble" : "none";

  const isDisable = (Object.keys(userData).length === 0 || userData['first'] === '') ? "disabled" : ''
  const btnSendStatus = (isDisable==="disabled")? "myBtn-disable" : null
  console.log(isDisable==="disabled");
  console.log(userData);
  return (
    <div className={formStyle} ref={refInvite}>
      <h2 className="inviteCaption">Заполни форму</h2>
      <div className="toggleGroup">
        <div className="toggleBlock mt-20">
          <MyToggle func={toggleMove} />
          <div>+1</div>
        </div>

        <div className="toggleBlock mt-20 ml-fix">
          <div className="toggleTxt blue" >Мальчик</div>
          <MyToggle func={toggleSex} />
          <div className="toggleTxt pink">Девочка</div>
        </div>
      </div>
      <MyInput label={"Ваше имя"} changeGuest={changeGuest} name={"first"} />

      <MyInput
        label={"Имя спутника"}
        className={guestStyle}
        changeGuest={changeGuest}
        name={"second"}
      />
      <button disabled={isDisable} className={`myBtn ${btnSendStatus}`} onClick={()=>showFinalBlock(userData)} 
      >ОТПРАВИТЬ</button>
    </div>
  );
}
