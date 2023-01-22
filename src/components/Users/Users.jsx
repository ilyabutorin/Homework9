import React from 'react'
import s from './style.module.css'

export default function Users({id, first_name, last_name, image, delete_user}) {

  return (
    <div className={s.user_card}>
        <img src={image} alt="user_img" />
        <p>{first_name} {last_name}</p>
        <button onClick={()=>delete_user(id)}>Delete user</button>
    </div>
  )
}
