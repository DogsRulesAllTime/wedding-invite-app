import React, {useState} from 'react'
import "./inviteForm.css"
import MyInput from './ui/MyInput';

export default function InviteForm({status, refInvite,changeGuest}) {
    const formStyle = status ? "formActive" : "formDisabled"; 

    const [additionalGuest, setAdditionalGuest] = useState(false)
    function toggleMove(){
      setAdditionalGuest(!additionalGuest)
      console.log(additionalGuest);
    }
    const guestStyle = additionalGuest ? "visibble" :"none"

  return (
    <div className={formStyle} ref={refInvite}>
        
       <h2 className='inviteCaption'>Заполни форму</h2>
     

        <div className="toggleBlock mt-20">
          <div className="toggle" >
            <label className="switch" z>
            <input type="checkbox"/>
            <span className="slider round" onClick={toggleMove} ></span>
            </label>
          </div>
        <div>+1</div>
        </div>

        
        <MyInput label={'Ваше имя'} changeGuest={changeGuest} name={'first'}/>


        <MyInput label={'Имя спутника'} className={guestStyle} 
        changeGuest={changeGuest}
        name={'second'}/>
        <button className='myBtn' >ОТПРАВИТЬ</button>

    </div>
  )
}
