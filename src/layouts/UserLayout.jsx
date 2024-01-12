import React from 'react';
import FooterUser from '../components/FooterUser';
import HeaderUser from '../components/HeaderUser/headeruser';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { UserContext } from '../components/userContext';



export default function UserLayout() {

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
