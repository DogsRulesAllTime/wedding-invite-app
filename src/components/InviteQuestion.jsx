import React from 'react'
import "./inviteQuestion.css"

export default function InviteQuestion({showForm}) {
  return (
    <div className='InviteQuestionBlock'>
        <h2>Приглашение</h2>
        <p>Ты придешь к нам?!?!</p>
        <button onClick={showForm}>ДА!</button>
    </div>
  )
}
