import { router, useEffect, useState } from "../../../lib";

const inforEdit = ({id}) => {

    
        const [infors, setInfors] = useState([]);
    
        useEffect(()=>{
            fetch(`${import.meta.env.VITE_API_URI}/information/${id}`)
            .then((Response)=>Response.json())
            .then((data)=>setInfors(data))
        },[])
        useEffect(()=>{
            const formAddProduct = document.querySelector("#form-edit-infor");
        const errorsElement = document.querySelector("#errors");
        formAddProduct.addEventListener("submit", function (event) {
            // chặn reload trang
            event.preventDefault();

            const formData = {
                Content: document.querySelector("#Content").value,
                Content2: document.querySelector("#Content2").value,
            };
            fetch(`${import.meta.env.VITE_API_URI}/information/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            }).then(() => {
                    router.navigate("/admin/information");
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
        padding:0 2%
    }
    .form-group label {
        display: block;
        margin-bottom: 5px;
        color: #666;
    }
    .form-group textarea {
        padding: 10px;
        font-size: 16px;
        border-radius: 5px;
        border: 1px solid #ccc;
        color:black;
        width:100%
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
    <div>inforEdit</div>
    <div id="errors"></div>
    <form id="form-edit-infor">
        <div class="form-group">
        <label for="Content">Content:</label>
        <textarea id="Content" placeholder="Nội dung 1" rows="3" cols="50" class="custom-textarea">${infors.Content}</textarea>
    </div>

    <div class="form-group">
        <label for="Content2">Content 2:</label>
        <textarea id="Content2" placeholder="Nội dung 2" rows="4" cols="50" class="custom-textarea">${infors.Content2}</textarea>
    </div>
    <div class="form-group">
        <button>Submit</button>
    </div>
    </form>
`  )
}

export default inforEdit