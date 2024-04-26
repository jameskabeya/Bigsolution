import React, { useContext, useState } from "react";

// Créez un contexte pour le composant Sidebar
// const SiderbarContext = React.createContext();

// Composant SidebarItem
export default function SiderbarItem({ active, alert }) {
    // Utilisez useContext pour accéder à la propriété expanded du contexte Sidebar
    //   const { expanded } = useContext(SiderbarContext);
    const [expanded, setExpanded] = useState(true)
    return (
        <li
            className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${active
                ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800" : "hover:bg-indigo-50 text-gray-600"}`}>

            <div className="flex">
                <img src="./src/assets/home.svg" />
                <span className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"} `} >Home</span>
                <img src="./src/assets/home.svg" />
                <span className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"} `} >Project</span>
                <img src="./src/assets/Leading Icon (1).svg" />
                <span className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"} `} >Tasks</span>
                <img src="./src/assets/Chat.svg" />
                <span className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"} `} >Performance</span>
                <img src="./src/assets/Leading Icon (2).svg" />
                <span className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"} `} >Settings</span>
                <img src="./src/assets/Leading Icon (2).svg" />
                <span className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"} `} >Logout</span>
            </div>

            {alert && (
                <div
                    className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? "" : "top-2"
                        }`}
                ></div>
            )}
        </li>
    );
}

// export default function SiderbarItem({ active, alert }) { 
//     const { expanded } = useContext(SiderbarContext);
//     return (
//         
//     );
// }
