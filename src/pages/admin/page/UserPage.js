import Header from "../../../components/header";
import { useEffect, useState } from "../../../lib";

const ProductAdminPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch(`${import.meta.env.VITE_API_URI}/users`)
        .then((Response) => Response.json())
        .then((data) => setUsers(data))
    },[])
    useEffect(() => {
        const btns = document.querySelectorAll(".btn-remove");
        for (let btn of btns) {
            const id = btn.dataset.id;
            btn.addEventListener("click", function () {
                const confirm = window.confirm("Bạn có chắc chắn muốn xóa không?");
                if (!confirm) return;
                fetch(`${import.meta.env.VITE_API_URI}/users/${id}`,{
                    method:"DELETE",
                })
                .then(()=>{
                    setUsers(users.filter((user) => user.id !== +id))
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
    <div>User Admin Page</div>
    <a href="/signup">them tai khoan</a>
    <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tên</th>
                        <th>email</th>
                        <th>mat khau</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    ${users
                        .map(
                            (user) => `
                            <tr>
                                <td>${user.id}</td>
                                <td>${user.name}</td>
                                <td>${user.email}</td>
                                <td>${user.password}</td>
                                <td>
                                <a href="#/admin/product/${user.id}/edit">edit</a>
                                    <button class="btn btn-remove" data-id="${
                                        user.id
                                    }"><i class="fa-solid fa-trash"></i></button>
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

export default ProductAdminPage