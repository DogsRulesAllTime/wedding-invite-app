import React from 'react'
import "./inviteForm.css"

export default function InviteForm({status, refInvite}) {
    const formStyle = status ? "formActive" : "formDisabled"; 
  return (
    <div className={formStyle} ref={refInvite}>
        <p>Заполни форму</p>
        <label  htmlFor="">Имя</label>
        <input type="text" name="" id="" />
        <input type="checkbox" name="name" id="id" />
    </div>
  )
}
