import { useEffect, useState } from "../lib";

const Header = () => {
    const[menus,SetMenus]=useState([])

    useEffect(()=>{
        fetch(`${import.meta.env.VITE_API_URI}/header`)
        .then((Response)=>Response.json())
        .then((data)=>SetMenus(data))
    },[])
    return `
    <style>
    header {
        min-height: 1vh;
        color: var(--color-white);
        overflow: hidden;
        padding: 0 !important;
    }

    </style>
        <header>
            <div class="flex justify-between p-4 bg-green-300">
                <ul class="flex items-center space-x-4">
                ${menus.map((men)=>
                    `<li>${men.menu}</li>`
                ).join("")}
                </ul>
                <div>2</div>
            </div>
            
        </header>
    `;
};
export default Header;