import React from 'react';
import FooterUser from '../components/FooterUser';
import HeaderUser from '../components/HeaderUser/headeruser';
import { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';

export const UserContext = createContext(null);

export default function UserLayout({children}) {

  console.log("Start UserLayout")
  const [user, setUser] = useState("authenticated")

  return (
        <UserContext.Provider value={{ user, setUser }} >
        <HeaderUser  />
        <main className='h-screen'>
        <Outlet />
        </main>
        <FooterUser  />
        </UserContext.Provider>
  )
}
