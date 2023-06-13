import Swal from "sweetalert2";
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
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })
        const btns = document.querySelectorAll(".btn-remove");
        for (let btn of btns) {
            const id = btn.dataset.id;
            btn.addEventListener("click",function(event) {
                event.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết
          // Hiển thị hộp thoại xác nhận với SweetAlert2
          Swal.fire({
              title: 'Xác nhận',
              text: 'Bạn có chắc chắn muốn xóa?',
              icon: 'warning',
              showCancelButton: true,
              confirmButtonText: 'Đồng ý',
              cancelButtonText: 'Hủy'
          }).then((result) => {
              if (result.isConfirmed) {
                fetch(`${import.meta.env.VITE_API_URI}/users/${id}`,{
                    method:"DELETE",
                })
                .then(()=>{
                    setUsers(users.filter((user) => user.id !== +id))
                })
                .then(()=>{
                    Toast.fire({
                        icon: 'success',
                        title: 'Xóa thành công'
                    })
                })
              }
          }); // Tải lại trang sau khi đăng xuất
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
                                <a href="#/admin/user/${user.id}/edit">edit</a>
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