import React from 'react';
import FooterUser from '../components/FooterUser';
import HeaderUser from '../components/HeaderUser/headeruser';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { UserContext } from '../components/userContext';



export default function UserLayout() {

  

  return (
        <>
        <HeaderUser  />
        <main className=''>
        <Outlet />
        </main>
        <FooterUser  />
        </>
  )
}
