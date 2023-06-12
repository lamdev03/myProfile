import { router, useEffect, useState } from "../../../lib";

const MyProfileEdit = ({id}) => {

    
        const [admins, setAdmins] = useState([]);
    
        useEffect(()=>{
            fetch(`${import.meta.env.VITE_API_URI}/admin/${id}`)
            .then((Response)=>Response.json())
            .then((data)=>setAdmins(data))
        },[])
        useEffect(()=>{
            const formAddProduct = document.querySelector("#form-edit-profile");
        const errorsElement = document.querySelector("#errors");
        formAddProduct.addEventListener("submit", function (event) {
            // chặn reload trang
            event.preventDefault();

            const formData = {
                name: document.querySelector("#name").value,
                location: document.querySelector("#location").value,
                email: document.querySelector("#email").value,
                education: document.querySelector("#education").value,
                numberPhone: document.querySelector("#numberPhone").value,
                languages: document.querySelector("#languages").value,
            };
            fetch(`${import.meta.env.VITE_API_URI}/admin/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            }).then(() => {
                    router.navigate("/admin/profile");
            });
        });
        })
  return (
`   
<style>
    .controls{
        display:none;
    }
    .form-group {
        margin-bottom: 20px;
        width:40%;
    }
    .form-group label {
        display: block;
        margin-bottom: 5px;
        color: #666;
    }
    .form-group input {
        padding: 10px;
        font-size: 16px;
        border-radius: 5px;
        border: 1px solid #ccc;
        color:black;
    }

    .form-group button {
        background-color: #4CAF50;
        color: #fff;
        border: none;
        padding: 10px 20px;
        font-size: 16px;
        border-radius: 5px;
        cursor: pointer;
    }

    .form-group button:hover {
        background-color: #45a049;
    }
</style>    
    <div>MyProfileEdit</div>
    <div id="errors"></div>
    <form id="form-edit-profile">
    <div class="form-group">
        <label for="name">name:</label>
        <input type="text" placeholder="Tên người dùng"  id="name" value="${admins.name}"/>
        <div>
    <div class="form-group">
        <label for="location">location:</label>
        <input type="text" placeholder="địa chỉ người dùng"  id="location" value="${admins.location}"/>
        <div>
    <div class="form-group">
        <label for="email">name:</label>
        <input type="email" placeholder="email"  id="email" value="${admins.email}"/>
        <div>
    <div class="form-group">
        <label for="education">education:</label>
        <input type="text" placeholder="học vấn"  id="education" value="${admins.education}"/>
        <div>
    <div class="form-group">
        <label for="numberPhone">numberPhone:</label>
        <input type="text" placeholder="số điện thoại"  id="numberPhone" value="${admins.numberPhone}"/>
        <div>
    <div class="form-group">
        <label for="languages">languages:</label>
        <input type="text" placeholder="ngôn ngữ"  id="languages" value="${admins.languages}"/>
        <div>
    <div class="form-group">
        <button>Submit</button>
    <div>
    </form>
`  )
}

export default MyProfileEdit