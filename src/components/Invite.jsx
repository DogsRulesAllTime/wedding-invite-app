import React, {useState, useRef} from 'react'
import InviteQuestion from './InviteQuestion'
import InviteForm from './InviteForm'
import "./invite.css"

export default function Invite() {
    const [form, setForm] = useState(false)
    const ref = useRef(null);
    const showForm = () =>{
        setForm(true);
        console.log(form);
        setTimeout(()=>moveToBlock(), 500)  
    }
    const moveToBlock = () => {
      ref.current?.scrollIntoView({behavior: 'smooth'});
      console.log(123);
    };
    

    // const handleClick = () => {
    //   ref.current?.scrollIntoView({behavior: 'smooth'});
    // };

  return (
    <div>
        <InviteQuestion showForm={showForm}/>
        <InviteForm status={form} refProps={ref}/>
    </div>

  )
}
