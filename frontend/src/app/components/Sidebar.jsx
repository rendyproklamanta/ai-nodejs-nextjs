'use client'

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faTimes,
   faBars,
} from "@fortawesome/free-solid-svg-icons";

function Sidebar() {

   const [sidebarOpen, setSidebarOpen] = useState(false);

   const toggleSidebar = () => {
      setSidebarOpen(!sidebarOpen);
   };

   return (
      <>
         {/* Open Sidebar Button */}
         {!sidebarOpen && (
            <button
               onClick={toggleSidebar}
               className="absolute top-4 left-4 text-white z-10"
            >
               <FontAwesomeIcon icon={faBars} size="2x" className="cursor-pointer"/>
            </button>
         )}

         {/* Sidebar */}
         {sidebarOpen && (
            <div className="w-64 bg-black text-white">
               <div className="flex items-center justify-between p-4 border-b border-gray-600">
                  <button
                     className="text-white text-lg font-bold"
                     onClick={toggleSidebar}
                  >
                     New Chat
                  </button>
                  <FontAwesomeIcon icon={faTimes} onClick={toggleSidebar} className="cursor-pointer"/>
               </div>
               <div className="p-4">
                  <div>Chat 1</div>
                  <div>Chat 2</div>
                  <div>Chat 3</div>
                  <div>Chat 4</div>
                  <div>Chat 5</div>
               </div>
            </div>
         )}
      </>
   );
}

export default Sidebar;
