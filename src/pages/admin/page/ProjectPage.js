import Header from "../../../components/header";
import { useEffect, useState } from "../../../lib";

const ProjectAdminPage = () => {
    const [projects, setProjects] = useState([]);
    useEffect(()=>{
        fetch(`${import.meta.env.VITE_API_URI}/project`)
        .then((Response) => Response.json())
        .then((data) => setProjects(data))
    },[])
    useEffect(() => {
        const btns = document.querySelectorAll(".btn-remove");
        for (let btn of btns) {
            const id = btn.dataset.id;
            btn.addEventListener("click", function () {
                const confirm = window.confirm("Bạn có chắc chắn muốn xóa không?");
                if (!confirm) return;
                fetch(`${import.meta.env.VITE_API_URI}/project/${id}`,{
                    method:"DELETE",
                })
                .then(()=>{
                    setProjects(projects.filter((project) => project.id !== +id))
                })
            });
        }
    });
  return (
    `<style>
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
    <div>ProjectAdminPage</div>
    <a href="#/admin/project/add">them project</a>
    <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tên</th>
                        <th>noi dung</th>
                        <th>ngay bat dau</th>
                        <th>ngay ket thuc</th>
                        <th>ky nang</th>
                        <th>github  </th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    ${projects
                        .map(
                            (project) => `
                            <tr>
                                <td>${project.id}</td>
                                <td>${project.name}</td>
                                <td>${project.description}</td>
                                <td>${project.start}</td>
                                <td>${project.end}</td>
                                <td>${project.skill}</td>
                                <td>${project.github}</td>
                                <td>
                                <a href="#/admin/product/${project.id}/edit">edit</a>
                                    <button class="btn btn-remove" data-id="${project.id}">
                                        <i class="fa-solid fa-trash"></i>
                                    </button>
                                </td>
                            </tr>
                    `
                        )
                        .join("")}
                    
                </tbody>
            </table>
    `
  )
}

export default ProjectAdminPage