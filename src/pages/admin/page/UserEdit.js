import { router, useEffect, useState } from "../../../lib";

const userEdit = ({id}) => {

    
        const [users, setUsers] = useState([]);
    
        useEffect(()=>{
            fetch(`${import.meta.env.VITE_API_URI}/users/${id}`)
            .then((Response)=>Response.json())
            .then((data)=>setUsers(data))
        },[])
        useEffect(()=>{
            const formAddProduct = document.querySelector("#form-edit-user");
        formAddProduct.addEventListener("submit", function (event) {
            // chặn reload trang
            event.preventDefault();

            const formData = {
                name: document.querySelector("#name").value,
                email: document.querySelector("#email").value,
                password: document.querySelector("#password").value,
            };
            fetch(`${import.meta.env.VITE_API_URI}/users/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })
            .then(() => {
                    router.navigate("/admin/user");
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
        width: 100%;
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
    <div>userEdit</div>
    <div id="errors"></div>
    <form action="#/admin/user" id="form-edit-user">
            <div class="form-group">
                <label for="name">name:</label>
                <input type="text" id="name" name="name" value="${users.name}" required>
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" value="${users.email}" required>
            </div>
            <div class="form-group">
                <label for="password">Mật khẩu mới:</label>
                <input type="password" id="password" name="password"  required>
            </div>
            <div class="form-group">
                <button>Submit</button>
            </div>
        </form>
`  )
}

export default userEdit