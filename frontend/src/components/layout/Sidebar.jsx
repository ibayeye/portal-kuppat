import React, { useState } from 'react';
import { HiMenuAlt2 } from 'react-icons/hi';
import { LuLayoutDashboard } from "react-icons/lu";
import { MdPeopleAlt } from "react-icons/md";
import { LuMonitorSpeaker } from "react-icons/lu";
import { BiTask } from "react-icons/bi";
import { IoDocumentTextOutline } from "react-icons/io5";
import logoIcon from '../../assets/logo_kuppat.png';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const menus = [
    { name: "Dashboard", link: "/", icon: LuLayoutDashboard},
    { name: "Tentang Kami", link: "/about", icon: MdPeopleAlt},
    { name: "Inventaris Alat", link: "/invalat", icon: LuMonitorSpeaker},
    { name: "Agenda", link: "/agenda", icon: BiTask},
    { name: "Dokumen", link: "/dokumen", icon: IoDocumentTextOutline}
  ];

  const [open, setOpen] = useState(true);
  const [selectedMenu, setSelectedMenu] = useState(0); // Default selected menu index

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  return (
    <section className="flex gap-6">
      <div className={`bg-[#111827] min-h-screen ${open ? 'w-72' : 'w-32'} duration-500 text-gray-100 px-4`}>
        <div className='py-3 flex justify-between'>
          <img 
            src={logoIcon}
            alt='logoIcon'
            className={`cursor-pointer`}
            style={{ width: '70px', height: '70px' }}/>
          <HiMenuAlt2
            size={26}
            className="cursor-pointer mt-6 rotate-180"
            onClick={() => setOpen(!open )}
          />
        </div>
        <div className='mt-4 flex flex-col gap-4 relative'>
          {menus?.map((menu, i) => (
            <Link 
              to={menu?.link} 
              key={i}
              onClick={() => handleMenuClick(i)} // Update selected menu on click
              className={`ml-2 group flex items-center text-xl gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md ${selectedMenu === i ? 'bg-gray-800' : ''}`}>
              <div> {React.createElement(menu?.icon, { size: "28" })} </div>
              <h2 
                style={{transitionDelay: `${i + 2}00ms`}}
                className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"}`}>
                {menu?.name}
              </h2>
              <h2
                className={`absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden 
                group-hover:px-2 group-hover:py-1 group-hover:left-20 group-hover:duration-300 group-hover:w-fit ${open ? 'hidden' : ''}`}>
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Sidebar;
