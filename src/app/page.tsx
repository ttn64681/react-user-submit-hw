"use client";
import { useState } from 'react';
import Users from './components/Users';
import Signup from './components/Signup'; // Adjust path as needed

export type User = {
  id: number;
  name: string;
  username: string;
  imageUrl: string;
  email: string;
  password: string;
};

const USERS_INIT: User[] = [
  {
    id: 1,
    name: 'Buzz Lightyear',
    username: 'blightyear',
    email: 'buzz.lightyear@gmail.com',
    password: 'password',
    imageUrl: 'https://picsum.photos/200/200?random=1',
  },
];

export default function Home() {
  const [users, setUsers] = useState<User[]>(USERS_INIT);

  const addUser = (newUser: User) => {
    setUsers([...users, newUser]);
  }

  const submitForm = (newUser: User) => {
    addUser(newUser);
  }

  return (
    <div>

      <div className="flex flex-col items-center justify-center p-8 bg-gray-100">
        <h1 className="text-4xl font-bold mb-6">Welcome to the Home Page</h1>
        <Users users={users} />
      </div>
      <Signup onSubmit={submitForm} />
    </div>
  );
}
