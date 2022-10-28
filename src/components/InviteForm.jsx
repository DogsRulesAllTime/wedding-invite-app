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

  return (
    <div className={formStyle} ref={refInvite}>
      <h2 className="inviteCaption">Заполни форму</h2>
      <div className="toggleGroup">
        <div className="toggleBlock mt-20">
          <MyToggle func={toggleMove} />
          <div>+1</div>
        </div>

        <div className="toggleBlock mt-20 ml-fix">
          <div className="toggleTxt">М</div>
          <MyToggle func={toggleSex} />
          <div className="toggleTxt">Ж</div>
        </div>
      </div>
      <MyInput label={"Ваше имя"} changeGuest={changeGuest} name={"first"} />

      <MyInput
        label={"Имя спутника"}
        className={guestStyle}
        changeGuest={changeGuest}
        name={"second"}
      />
      <button className="myBtn" onClick={()=>showFinalBlock(userData)}>ОТПРАВИТЬ</button>
    </div>
  );
}
