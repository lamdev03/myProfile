import Swal from "sweetalert2"
import Header from "../../../components/header"
import { useEffect, useState } from "../../../lib"

const AdminMenu = () => {
    const [menus,setMenus]=useState([])

    useEffect(()=>{
        fetch(`${import.meta.env.VITE_API_URI}/header`)
        .then((Response)=>Response.json())
        .then((data)=>setMenus(data))
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
                fetch(`${import.meta.env.VITE_API_URI}/header/${id}`,{
                    method:"DELETE",
                })
                .then(()=>{
                    setMenus(menus.filter((men) => men.id !== +id))
                })
                .then(()=>{
                    Toast.fire({
                        icon: 'success',
                        title: 'Xóa thành công'
                    })
                })
            }
        }); 
            });
        }
    });
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
<a href="#/admin/menu/add"><div>add new menu</div></a>
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