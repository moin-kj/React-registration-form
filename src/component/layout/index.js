import React from 'react';
import Sidebar from './sideBar';

const Layout = (props) => {
  return (
    <div className='layout-bg h-screen flex justify-between'>
        <Sidebar />
        <div className='w-full lg:w-[50%] bg-[#363334] opacity-95'>
            {props?.children}
        </div>
    </div>
  )
}

export default Layout;