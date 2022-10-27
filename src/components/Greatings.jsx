import React from 'react'
import "./greatings.css"

export default function Greatings({handleClick}) {
  return (
    <div className='greatBlock'>
        <div className="greatTxt">Как часто зимой ты мечтаешь о лете?</div>
        <div className="greaCaption">02.12.22</div>
         <div className="arrowBlock" id='arrowId' onClick={handleClick}>
         <i className="arrow" />
           </div> 

        {/* <div className="greatDescription">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias vel eveniet commodi ullam voluptates, quisquam mollitia fugiat? Sunt adipisci consectetur, exercitationem labore sed laboriosam, temporibus cupiditate rerum reprehenderit ipsum molestiae?
            Quaerat accusamus sapiente vero sed veniam! Aperiam, dolorum illum itaque sapiente neque iusto, corrupti laborum quae reiciendis porro distinctio hic saepe optio quo ducimus dolores alias sunt, nihil cum quis?
        </div> */}
    </div>
  )
}
