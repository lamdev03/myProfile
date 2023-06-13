import Swal from "sweetalert2";

document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem("user")) {
        // Hiển thị nút đăng xuất
        const logoutButtonHTML = `
        <style>
                .controls .control1{
                    display:none
                }
        </style>
            <div class="control" id="logout" style="width: 98px;right: 60px;position: absolute;top:16px;">
                <a href="http://localhost:5173">Đăng xuất</a>
            </div>
        `;
        const logoutContainer = document.getElementById("login-container");
        logoutContainer.innerHTML = logoutButtonHTML;
        const logoutButton = logoutContainer.querySelector("#logout");
        logoutButton.addEventListener("click", function(event) {
          event.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết
    // Hiển thị hộp thoại xác nhận với SweetAlert2
    Swal.fire({
        title: 'Xác nhận',
        text: 'Bạn có chắc chắn muốn đăng xuất?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Đồng ý',
        cancelButtonText: 'Hủy'
    }).then((result) => {
        if (result.isConfirmed) {
            // Xử lý sự kiện đăng xuất
            localStorage.removeItem("user");
            window.location.href = "http://localhost:5173"; // Tải lại trang sau khi đăng xuất
        }
    }); // Tải lại trang sau khi đăng xuất
        });
        document.body.appendChild(logoutButton);
      } else {
        // Hiển thị đoạn mã HTML cho đăng nhập
        const loginButtonHTML = `
          <a href="/#/signup"><i class="fa-solid fa-arrow-right-to-bracket"></i></a>
          <div class="control" id="login" style="width: 87px;right: 60px;position: absolute;">
            <a href="/#/signin">log in</a>
          </div>
        `;
        const loginContainer = document.getElementById("login-container");
        
        loginContainer.innerHTML = loginButtonHTML;
        loginButton.addEventListener("click", function() {
          // Xử lý sự kiện đăng nhập ở đây
          // Tải lại trang sau khi đăng nhập
          window.location.href = "http://localhost:5173/#/signin";
        });
        document.body.appendChild(loginContainer);
      }
    });