import React from 'react'
import s from './style.module.css'

export default function Form({ add_user }) {

  const adding = event => {
    event.preventDefault();
    const { first_name } = event.target;
    const { last_name } = event.target;
    const { image } = event.target;

    const new_user = {
      id: Date.now(),
      first_name: first_name.value,
      last_name: last_name.value,
      image: image.value,
      show: true
    };

    add_user(new_user);

    first_name.value = '';
    last_name.value = '';
    image.value = '';

  }

  return (
    <div>
      
      <form className={s.input_form} onSubmit={adding}>
        <input type="text" placeholder='Name' name='first_name' />
        <input type="text" placeholder='Lastname' name='last_name' />
        <input type="text" placeholder='Image...' name='image' />
        <button>Add user</button>
      </form>

    </div>
  )
}
