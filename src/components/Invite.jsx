// import React, {useState, useRef} from 'react'
// import InviteQuestion from './InviteQuestion'
import InviteForm from './InviteForm'
import "./invite.css"
// import smoothscroll from 'smoothscroll-polyfill';

export default function Invite({refInvite,status}) {
    // const [form, setForm] = useState(false)
    // const ref = useRef(null);
    // const showForm = () =>{
    //     setForm(true);
    //     console.log(form);
    //     setTimeout(()=>moveToBlock(), 500)  
    // }
    // const moveToBlock = () => {
    //   // smoothscroll.polyfill().scrollBy({ top: 100, left: 0, behavior: 'smooth' })
    //   ref.current?.scrollBy({ top: 100, left: 0, behavior: 'smooth' });
    //   console.log(123);
    // };
    // ({behavior: 'smooth'})

    // const handleClick = () => {
    //   ref.current?.scrollIntoView({behavior: 'smooth'});
    // };

  return (
    <div className='inviteBlock'>
        {/* <InviteQuestion showForm={showForm}/> */}
        <InviteForm status={status} refInvite={refInvite}/>
    </div>

  )
}
