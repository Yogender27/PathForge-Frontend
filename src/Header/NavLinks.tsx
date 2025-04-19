import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const NavLinks = () => {
  const links = [
    { name: "Find Job", url: "find-job" },
    { name: "Find Talent", url: "find-talent" },
    { name: "Upload Job", url: "upload-job" },
    { name: "About Us", url: "about-us" }
    
  ];
  const location = useLocation();

  return (
    <div className="flex gap-5 items-center">
      {links.map((link, index) => {
        const isActive = location.pathname === "/"+link.url;
        return (
          <div
            key={index}
            className={`px-3 py-1 rounded ${
              isActive ? 'border-b-2 border-bright-sun-400 text-bright-sun-400' : ''
            }`}
          >
            <Link to={link.url}>{link.name}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default NavLinks;
