import React, {useState} from 'react'
// import InviteQuestion from './InviteQuestion'
import InviteForm from './InviteForm'
import "./invite.css"
// import smoothscroll from 'smoothscroll-polyfill';

export default function Invite({refInvite,status,toggleSex,showFinalBlock,handleClickToFinal}) {
  const [userData, setUserData] = useState({})
  

  function changeGuest(field, value){
    const data = {}
    data[field] = value
    setUserData(userData => ({...userData, [field] : value}))
    console.log(userData);
  }
  function toggleClearState(){
    setUserData(userData => ({...userData, second : ''}))
  }


  return (
    <div className='inviteBlock'>
        <InviteForm status={status} refInvite={refInvite}
        changeGuest={changeGuest}
        toggleClearState={toggleClearState}
        toggleSex={toggleSex}
        showFinalBlock={showFinalBlock}
        handleClickToFinal={handleClickToFinal}
        userData={userData}
        />
    </div>

  )
}
