import React from "react";
import "./info.css";

export default function Info({ gg }) {
  return (
    <div className="infoBlock" ref={gg}>
      <div className="infoCaption">Привет</div>
      <div className="infoTxt">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis sint
        ut totam veniam quibusdam odio, voluptatibus reiciendis facere iusto
        dolores eaque libero rem accusantium. Labore error perspiciatis earum
        minima ut? Placeat minus nihil, corrupti iste quis maxime voluptatum
        vero quidem vel impedit veritatis sunt recusandae doloremque adipisci
        praesentium provident voluptate! Architecto officiis id sed accusantium
        doloremque adipisci ab suscipit voluptate.
      </div>
    </div>
  );
}
