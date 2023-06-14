import { useEffect, useState } from "../lib";

const ProjectDetailPage = ({ id }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URI}/project`)
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);

  const project = projects.find((project) => project.id === +id);
  if (!project) return "Product not found";

  return `
    <style>
      .controls {
        display: none;
      }
    </style>

    <div class="flex justify-center pt-10 text-2xl">ProjectDetailPage</div>
    <div class="float-left pl-5"><a href="/#"><i class="fa-solid fa-2xl fa-house absolute pl-5"></i></a></div>
    <div class="grid grid-cols-2 grid-flow-col gap-8 pr-20 pt-20">
      <div style="width: 100%" class="image">
        <img src="${project.img}" alt="">
      </div>
      <div class="grid gap-2">
        <h1 class="text-3xl">${project.name}</h1>
        <p>${project.description}</p>
        <p>Ngày bắt đầu: ${project.start}</p>
        <p>Ngày kết thúc: ${project.end}</p>
        <span>Các ngôn ngữ của mình dùng trong dự án: ${project.skill}</span>
        <div class="icons">
          <a href="${project.github}" class="icon">
            <i class="fab fa-2xl fa-github"></i>
          </a>
        </div>
      </div>
    </div>

    <div class="related-projects">
      <h2 class="text-2xl mt-10">Các dự án liên quan</h2>
      <div class="grid grid-cols-3 gap-8 mt-5">
        ${projects
          .filter((proj) => proj.id !== +id)
          .map((proj) => `
            <div class="project-card">
              <img src="${proj.img}" alt="">
              <h3 class="text-lg mt-2">${proj.name}</h3>
              <a href="#/projectdetail/${proj.id}"  class="button text-green-400">Xem chi tiết</a>
            </div>
          `)
          .join("")}
      </div>
    </div>
  `;
};

export default ProjectDetailPage;
