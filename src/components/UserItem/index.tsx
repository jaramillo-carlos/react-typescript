import React, { memo, MouseEvent } from 'react';
import { User } from '../../zustand'
import { useHistory } from 'react-router-dom';

// export default memo(function UserItem(props: User) {
export default memo(function UserItem({
  address,
  company,
  email,
  id,
  name,
  phone,
  username,
  website
}: User) {
  const history = useHistory();
  const handleClick = (event: MouseEvent) => {
    console.log(event.target);
    history.push(`/user/${id}`);
  }

  return (
    <div
      style={{ margin: 10, display: 'flex', flexDirection: 'column', border: '1px solid red', padding: 10, alignItems: 'center', justifyContent: 'center' }}
      onClick={handleClick} >
      {name}
      <label>{name}</label>
      <label>{phone}</label>
      <label>{email}</label>
      <button style={{ width: 200, marginTop: 10 }}>Ver Detalle</button>
    </div >
  )
});