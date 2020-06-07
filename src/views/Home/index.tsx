import React, { useState, useEffect } from 'react';

import useMyStore, { User, MyState } from '../../zustand'
import UserItem from '../../components/UserItem'

const fakeUsers: object = [{ id: 1, name: 'Carlos', lastName: 'Jaramillo', age: 23 }];
const [useStore] = useMyStore;

// properties from component
type HomeProps = {
  id?: number | string;
  loginStatus?: string | undefined;
}

// properties from API
interface HomePropsApi {

}

// const Home: React.FC<HomeProps> = ({ id, loginStatus }) => {
const Home: React.FC<HomeProps> = () => {
  // const [users, setUsers] = useState<object>(fakeUsers);
  // const [isLoading, setIsLoading] = useState<boolean>(true);

  const users = useStore(state => state.users);
  const getUsers = useStore(state => state.getUsers); // triger like action
  const isLoading = useStore(state => state.isLoading);

  console.log(users);

  useEffect(() => {
    // like can't call async funct in useffect, will use IIFE
    (async function () {
      await getUsers();
    })()
  }, [])

  const renderUsers = (): JSX.Element[] | JSX.Element | undefined => {

    if (isLoading) {
      return <p>Loading..</p>
    }
    if (users && users.length) {
      return users.map((user: User, index) => <UserItem key={index} {...user} />)
    }
  }

  return (
    <div>
      {renderUsers()}
    </div>
  )
}

export default Home;