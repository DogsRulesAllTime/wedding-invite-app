import React from "react";
import "./info.css";

export default function Info({ refInfo, showForm}) {


  return (
    <div className="infoBlock" ref={refInfo}>
      <div className="infoCaption">Привет</div>
      <div className="infoTxt">
      В первую пятницу декабря мы отменяем зимнюю хандру и приглашаем тебя провести один день лета зимой на нашей <span>свадьбе. </span> 
Пляжная атмосфера, летняя музыка, прохладительные напитки, жаркие танцы и много другое…
      </div>
      <div className="question">
      <div className="questionTxt">Ты с нами?</div>
      <button onClick={showForm}>ДА!</button>
      </div>
    </div>
  );
}
