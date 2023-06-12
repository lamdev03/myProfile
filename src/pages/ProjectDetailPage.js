import { useEffect, useState } from "../lib";

const ProjectDetailPage = ({id}) => {
    const[projects,setProject]=useState([])

    useEffect(()=>{
        fetch(`${import.meta.env.VITE_API_URI}/project`)
        .then((Response)=>Response.json())
        .then((data)=>setProject(data))
    },[])

    const project = projects.find((project) => project.id === +id);
    if (!project) return "Product not found";
  return (

`   
<style>
.controls{
    display:none;
}
</style>

<div class="flex justify-center pt-10 text-2xl">ProjectDetailPage</div>
<div class="float-left pl-5 "><a href="/#"><i class="fa-solid fa-2xl fa-house absolute pl-5"></i></a></div>
<div class=" grid grid-cols-2 grid-flow-col gap-8 pr-20 pt-20">
    <div style="width:100%" class="image">
        <img src="${project.img}" alt="">
    </div>   
        <div class="grid gap-2" >
            <h1 class="text-3xl" >${project.name}</h1>
            <p>${project.description}</p>
            <p>Ngày bắt đầu:${project.start}</p>
            <p>Ngày kết thúc:${project.end}</p>
            <span>Các ngôn ngữ của mình dùng trong dự án:${project.skill}</span>
            <div class="icons">
                <a href="${project.github}" class="icon">
                    <i class="fab fa-2xl fa-github"></i>
                </a>
        </div>
</div>

`  )
}

export default ProjectDetailPage