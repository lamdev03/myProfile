import Swal from "sweetalert2";
import Header from "../../../components/header";
import { useEffect, useState } from "../../../lib";

const ContactPage = () => {
    const [contacts, setContacts] = useState([]);
    useEffect(()=>{
        fetch(`${import.meta.env.VITE_API_URI}/contact`)
        .then((Response) => Response.json())
        .then((data) => setContacts(data))
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
                fetch(`${import.meta.env.VITE_API_URI}/contact/${id}`,{
                    method:"DELETE",
                })
                .then(()=>{
                    setContacts(contacts.filter((contact) => contact.id !== +id))
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
    <div>ContactPage</div>
    <a href="#/admin/contact/add">them contact</a>
    <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>email</th>
                        <th>message</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    ${contacts
                        .map(
                            (contact) => `
                            <tr>
                                <td>${contact.id}</td>
                                <td>${contact.name}</td>
                                <td>${contact.email}</td>
                                <td>${contact.message}</td>
                                <td>
                                    <button class="btn btn-remove" data-id="${contact.id}">
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

export default ContactPage