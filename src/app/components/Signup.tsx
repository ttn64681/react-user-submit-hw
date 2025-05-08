"use client";
import Card from './Card';
import Button from './Button';
import styles from './Signup.module.css';
import { useState } from 'react';
import { User } from '../page';

interface SignupProps {
  onSubmit: (newUser: User) => void;
}

type FormData = {
  name: string;
  username: string;
  email: string;
  password: string;
  imageLink: string;
}

/**
 * Main component for the Signup page.
 * This component renders a signup form with fields for name, username, email, password, and image link.
 * 
 * Contains Card.tsx, Button.tsx, and Signup.module.css
*/
export default function Signup({ onSubmit }: SignupProps) {
  // State to manage the form data
  const [formData, setFormData] = useState<FormData>({
    name: '',
    username: '',
    email: '',
    password: '',
    imageLink: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value, // update the specific field in the form data
    });
  }

  const submitForm = (event: React.FormEvent) => {
    event.preventDefault();
    const newUser = {
      id: Date.now(), // unique ID for the user
      name: formData.name,
      username: formData.username,
      email: formData.email,
      password: formData.password,
      imageUrl: formData.imageLink,
    };

    onSubmit(newUser);

    setFormData({ // clear form
      name: '',
      username: '',
      email: '',
      password: '',
      imageLink: '',
    });
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-3">
      <Card className={`${styles.input} w-full max-w-lg p-3 bg-white shadow-md rounded-md`}>
        <h1 className="text-4xl font-bold mb-6 text-center">Signup</h1>
        <form onSubmit={submitForm}>
          <label htmlFor="name">Name</label>
          <input className="p-2 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
          <label htmlFor="username">Username</label>
          <input className="p-2 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500"
            name="username"
            type="text"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your username"
            required={true}
          />
          <label htmlFor="email">Email</label>
          <input className="p-2 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          <label htmlFor="password">Password</label>
          <input className="p-2 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required={true}
          />
          <label htmlFor="imageLink">Image Link</label>
          <input className="border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500"
            name="imageLink"
            type="url"
            value={formData.imageLink}
            onChange={handleChange}
            placeholder="Enter image URL"
          />

          <Button type="submit">Sign Up</Button>
        </form>
      </Card>
    </div>
  );
}