import Header from "../../../components/header"
import { useEffect, useState } from "../../../lib"

const AdminMenu = () => {
    const [menus,setMenus]=useState([])

    useEffect(()=>{
        fetch(`${import.meta.env.VITE_API_URI}/header`)
        .then((Response)=>Response.json())
        .then((data)=>setMenus(data))
    },[])

  return (
`    
    <style>
    .controls{
        display:none
    }
    th {
        background-color: #27ae60;
        color: white;
    }
    table {
        border-collapse: collapse;
        width:40%;
    }
    table, th, td {
        border: 1px solid;
    }
    td {
        text-align: center;
    }
    </style>
    ${Header()}
<div>AdminMenu</div>
<table>
    <thead>
        <tr>
            <th>id</th>
            <th>Name</th>
            <th></th>
        </tr>
    </thead>
    <tbody>
    ${menus.map((men)=>
        `        
        <tr>    
            <td>${men.id}</td>
            <td>${men.menu}</td>
            <td>
            <a href="#/admin/menu/${men.id}/edit">edit</a>
            <button class="btn btn-remove" data-id="${men.id}">
            <i class="fa-solid fa-trash"></i>
        </button></td>
        </tr>`
    ).join("")}
    </tbody>
</table>
`  )
}

export default AdminMenu