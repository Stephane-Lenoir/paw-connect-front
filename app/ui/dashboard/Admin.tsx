import { useEffect, useState } from 'react';
import { getUserByRole } from '../../services/Users';

export default function Admin() {
  const [Users, setUsers] = useState(null);

  useEffect(() => {
    // get the user role from the getUserByRole() function
    const getUsers = async () => {
      try {
        const users = await getUserByRole();
        console.log(users);
        setUsers(users);
      } catch (error) {
        console.error(error);
      }
    };

    getUsers();
  }, []);

  return <div>{Users && Users.map((user) => <h1 key={user.id}> {user.name}</h1>)}</div>;
}
