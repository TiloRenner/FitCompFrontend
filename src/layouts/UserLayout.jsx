import React from 'react';

import FooterUser from '../components/FooterUser';
import HeaderUser from '../components/HeaderUser/headeruser';

export default function UserLayout({children}) {
  return (
    <div>
        <HeaderUser  />
        <main className='h-screen'>
        {children}
        </main>
        <FooterUser  />
    </div>
  )
}
