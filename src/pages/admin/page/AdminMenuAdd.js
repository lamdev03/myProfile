import { router, useEffect, useState } from "../../../lib";

const menuAdd = () => {

        useEffect(()=>{
            const formAddProduct = document.querySelector("#form-add-menu");
        formAddProduct.addEventListener("submit", function (event) {
            // chặn reload trang
            event.preventDefault();

            const formData = {
                menu: document.querySelector("#name").value,
            };
            fetch(`${import.meta.env.VITE_API_URI}/header`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            }).then(() => {
                    router.navigate("/admin/menu");
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
    <div>menuAdd</div>
    <div id="errors"></div>
    <form id="form-add-menu">
            <div class="form-group">
                <label for="name">name:</label>
                <input type="text" id="name" name="name"value="<a href=''></a>" required>
            </div>
            <div class="form-group">
                <button>Submit</button>
            </div>
        </form>
`  )
}

export default menuAdd