import Header from "../../../components/header"
import { useEffect, useState } from "../../../lib"

const MyProfilePage = () => {
    const [admins,setAdmins]=useState([])

    useEffect(()=>{
        fetch(`${import.meta.env.VITE_API_URI}/admin`)
        .then((Response) => Response.json())
        .then((data) => setAdmins(data))
    },[])

  return `<style>
    .controls{
        display:none;
    }
    th {
        background-color: #27ae60;
        color: white;
    }
    table {
        border-collapse: collapse;
        width:80%;
    }
    table, th, td {
        border: 1px solid;
    }
    td {
        text-align: center;
    }
    </style>
    ${Header()}
    <div>User Admin Page</div>
    <table>
                <thead>
                    <tr>
                        <th>Ten</th>
                        <th>dia chi</th>
                        <th>email</th>
                        <th>hoc van</th>
                        <th>so dien thoai</th>
                        <th>ngon ngu</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    ${admins
                        .map(
                            (admin) => `
                            <tr>
                                <td>${admin.name}</td>
                                <td>${admin.location}</td>
                                <td>${admin.email}</td>
                                <td>${admin.education}</td>
                                <td>${admin.numberPhone}</td>
                                <td>${admin.languages}</td>
                                <td>
                                <a href="#/admin/profile/${admin.id}/edit">edit</a>
                                </td>
                            </tr>
                    `
                        )
                        .join("")}
                    
                </tbody>
            </table>
    `
}

export default MyProfilePage