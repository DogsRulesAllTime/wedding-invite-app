import React from 'react'
import "./greatings.css"

export default function Greatings({handleClick}) {
  return (
    <div className='greatBlock'>
      {/* <div className="greatContent"> */}
        <div className="greatTxt">Как часто зимой ты мечтаешь о лете?</div>
        <div className="greaCaption">02.12.22</div>
         <div className="arrowBlock" id='arrowId' onClick={handleClick}>
            <i className="arrow" />
          </div> 
      {/* </div> */}
    </div>
  )
}
