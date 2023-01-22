import React from 'react'
import s from './style.module.css'

export default function Search({search_user}) {

    const search = event => {
        search_user(event.target.value);
    };

  return (
    <div className={s.search}>
        <input onChange={search} 
        type="text" placeholder='Search user...' name='title'/>
    </div>
  )
};