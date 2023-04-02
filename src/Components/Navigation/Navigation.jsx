import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import Link from '../Link/Link';

const Navigation = () => {
    const [open, setOpen] = useState(false);
    // const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, name: 'About', link: '/about' },
        { id: 2, name: 'Experience', link: '/experience' },
        { id: 3, name: 'Work', link: '/work' },
        { id: 4, name: 'Contact', link: '/contact' },
      ];
    return (
        <div className="bg-slate-600 ">
             <div onClick={() => setOpen(!open)} className="w-9 md:hidden">
        {open ? <XMarkIcon></XMarkIcon> : <Bars3Icon></Bars3Icon>}
      </div>
      <ul
        className={`md:flex justify-center absolute md:static md:p-5 text-white font-semibold text-lg p-3 bg-slate-600 w-full duration-500 ease-in ${
          open ? 'top-8' : 'top-[-140px]'
        }`}
      >
        {routes.map(route => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
            
        </div>
    );
};

export default Navigation;