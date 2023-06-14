import Swal from "sweetalert2";
import { useEffect } from "../../lib";
import joi from "joi";
const schema = joi.object({
    name: joi.string().required(),
    email: joi.string() .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    password: joi.string().min(6).required()
  });
const signup = () => {
    console.log("singup")
    useEffect(() => {
        const formSignup = document.querySelector("#form-signup");
        const errorsElement = document.querySelector("#errors");
        if (!formSignup) return;
        formSignup.addEventListener("submit", function (event) {
            // chặn reload trang
            event.preventDefault();

            const credential = {
                name: document.querySelector("#name").value,
                email: document.querySelector("#email").value,
                password: document.querySelector("#password").value,
            };
            const { error } = schema.validate(credential, { abortEarly: false });
            if (error) {
                const errors = error.details.map((err) => err.message);
                errorsElement.innerHTML = errors.map((err) => `<p>${err}</p>`).join("");
                return;
            }
            fetch(`${import.meta.env.VITE_API_URI}/signup`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(credential),
            }).then(() => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Đăng ký thành công',
                    showConfirmButton: false,
                    timer: 1500
                });
                window.location.href = "/#/signin";
            });
        });
    });
  return (
    `<style>
    .controls{
        display:none;
    }
    .contai {
        width: 400px;
        margin: 50px auto;
        background-color: #fff;
        padding: 20px;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    h2 {
        text-align: center;
        color: #333;
    }

    .form-group {
        margin-bottom: 20px;
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
    <div class="contai">
    <h2>Đăng Ký</h2>
    <div id="errors"></div>
    <form id="form-signup">
            <div class="form-group">
                <label for="name">Họ và tên:</label>
                <input type="text" id="name" name="name" required>
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
            </div>
            <div class="form-group">
                <label for="password">Mật khẩu:</label>
                <input type="password" id="password" name="password" required>
            </div>
            <div class="form-group">
                <button type="submit">Đăng ký</button>
                <span style="color: black;" >bạn đã có tài khoản <a href="/signin">đăng nhập</a></span>
            </div>
        </form>
        </div>`
  )
}

export default signup