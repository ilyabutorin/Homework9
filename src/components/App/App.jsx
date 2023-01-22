import React from 'react';
import { useState } from 'react';
import Form from '../Form/Form';
import Search from '../Search/Search';
import Users from '../Users/Users';
import s from './style.module.css'

function App() {

  const default_users = [
    { id: 1, first_name: 'Ilya', last_name: 'Butorin', image: 'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403', show: true},
    { id: 2, first_name: 'Alona', last_name: 'Astasova', image: 'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403', show: true },
    { id: 3, first_name: 'Hayk', last_name: 'Inanc', image: 'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403', show: true }
  ];

  const [users, setUsers] = useState(default_users);

  const add_user = (user) => {
    setUsers([...users, user])
  };

  const delete_user = (id) => {
    const new_users = users.filter(elem => elem.id !== id)
    setUsers(new_users)
  };


  const search_user = (substring) => {
    substring = substring.toLowerCase();

    const new_user = users.map(user => {
        user.show = user.first_name.toLowerCase().startsWith(substring) || user.last_name.toLowerCase().startsWith(substring);
        return user
    })
    setUsers(new_user);
  };

  return (
    <div className={s.body}>
      <Form add_user={add_user}/>
      <Search  search_user={search_user}/>
      <div className={s.card_container}>
        {
          users
          .filter(({show})=> show)
          .map(user => 
            <Users 
              key={user.id}
              {...user}
              delete_user = {delete_user}
            />)
        }
        
      </div>
    </div>
  );
}

export default App;
