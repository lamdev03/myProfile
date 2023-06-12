import { useEffect } from "../../lib";

const signin = () => {
    console.log("singup")
    useEffect(() => {
        const formSignin = document.querySelector("#form-signin");
        if (!formSignin) return;
        formSignin.addEventListener("submit", function (event) {
            // chặn reload trang
            event.preventDefault();

            const credential = {
                email: document.querySelector("#email").value,
                password: document.querySelector("#password").value,
            };

            fetch(`${import.meta.env.VITE_API_URI}/signin`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(credential),
            })
            .then((response) => response.json())
            .then((data) => {
                // Lưu vào LocalStorage
                localStorage.setItem("user", JSON.stringify(data));
                const userString = localStorage.getItem('user');
                const user = JSON.parse(userString);
            
                if (user.accessToken) {
                    alert("đăng nhập thành công")
                    // Nếu có accessToken, tiếp tục thực hiện các hành động khác
                    window.location.href = "/#/admin/user";
                    location.reload();
                } else {
                    // Nếu không có accessToken, xóa toàn bộ dữ liệu trong LocalStorage
                    localStorage.clear();
                    alert("Thất bại");
                }
            })
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
    <h2>Đăng Nhập</h2>
    <form id="form-signin">
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
            </div>
            <div class="form-group">
                <label for="password">Mật khẩu:</label>
                <input type="password" id="password" name="password" required>
            </div>
            <div class="form-group">
                <button type="submit">Đăng Nhập</button>
                <span style="color: black;" >bạn chưa có tài khoản <a href="/signup">đăng ký</a></span>

            </div>
        </form>
        </div>`
  )
}

export default signin