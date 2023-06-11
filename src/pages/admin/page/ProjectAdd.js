import { router, useEffect } from "../../../lib";


const ProjectAddPage = () => {


    useEffect(() => {
        const formAddProject = document.querySelector("#form-add-project");
        formAddProject.addEventListener("submit", function (event) {
            // chặn reload trang
            event.preventDefault();

            const project = {
                name: document.querySelector("#name").value,
                description: document.querySelector("#description").value,
                start: document.querySelector("#start").value,
                end: document.querySelector("#end").value,
                skill: document.querySelector("#skill").value,
                github: document.querySelector("#github").value,
                img: document.querySelector("#img").value,
            };

            fetch(`${import.meta.env.VITE_API_URI}/project`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(project),
            }).then(() => {
                    router.navigate("/admin/project");
            });
        });
    });
    return `
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
        <h1>Product Page</h1>
        <form id="form-add-project">
            <div class="form-group">
                <label for="name">name:</label>
                <input type="text" id="name" name="name" required>
            </div>
            <div class="form-group">
                <label for="description">Noi dung:</label>
                <input type="text" id="description" name="description" required>
            </div>
            <div class="form-group">
                <label for="start">ngay bat dau:</label>
                <input type="date" id="start" name="start" required>
            </div>
            <div class="form-group">
                <label for="end">ngay ket thuc:</label>
                <input type="date" id="end" name="end" required>
            </div>
            <div class="form-group">
                <label for="skill">ky nang trong du an:</label>
                <input type="text" id="skill" name="skill" required>
            </div>
            <div class="form-group">
                <label for="github">github:</label>
                <input type="text" id="github" name="github" required>
            </div>
            <div class="form-group">
                <button>Submit</button>
            </div>
        </form>
`;
}

export default ProjectAddPage