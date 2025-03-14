import axios from 'axios';
import React, { useEffect, useState } from 'react';

// Define the user interface
interface IUser {
  _id: string;
  name: string;
  email: string;
}

const UsersList: React.FC = () => {
  // Initialize state with type IUser[]
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    // Specify that the response data should be of type IUser[]
    axios.get<IUser[]>('http://localhost:5001/api/sample_mflix/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user._id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
