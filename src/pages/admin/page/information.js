import Header from "../../../components/header"
import { useEffect, useState } from "../../../lib"

const inforPage = () => {
    const [infors,setInfors]=useState([])

    useEffect(()=>{
        fetch(`${import.meta.env.VITE_API_URI}/information`)
        .then((Response) => Response.json())
        .then((data) => setInfors(data))
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
        text-align: left;
        padding:10px
    }
    </style>
    ${Header()}
    <div>information Admin Page</div>
    <table>
                <thead>
                    <tr>
                        <th>Content1</th>
                        <th>Content2</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    ${infors
                        .map(
                            (inf) => `
                            <tr>
                                <td>${inf.Content}</td>
                                <td>${inf.Content2}</td>
                                <td>
                                <a href="#/admin/information/${inf.id}/edit">edit</a> 
                                </td>
                            </tr>
                    `
                        )
                        .join("")}
                    
                </tbody>
            </table>
    `
}

export default inforPage