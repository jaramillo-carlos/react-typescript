import React, { useState, useEffect } from 'react';

const fakeUsers: object = [{ id: 1, name: 'Carlos', lastName: 'Jaramillo', age: 23 }];

// properties from component
type HomeProps = {
  id?: number | string;
  loginStatus?: string | undefined;
}

// properties from API
interface HomePropsApi {

}

const Home: React.FC<HomeProps> = ({ id, loginStatus }) => {
  const [users, setUsers] = useState<Object>(fakeUsers);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, [])

  return (
    <h1>Home {isLoading && <p>Loading..</p>}</h1>
  )
}

export default Home;