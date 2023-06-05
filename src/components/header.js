// import { Admin, Information } from "../data";
import { useEffect, useState } from "../lib";

const Header =() => {
    const [Admin, setAdmin] = useState([]);
    const [Information,setInformation]=useState([]);
    useEffect(()=>{
        fetch(`${import.meta.env.VITE_API_URI}/Admin`)
        .then((Response) => Response.json())
        .then((data) => setAdmin(data))
    },[]) 
    useEffect(()=>{
        fetch(`${import.meta.env.VITE_API_URI}/Information`)
        .then((Response) => Response.json())
        .then((data) => setInformation(data))
    },[]) 
    return /*html*/`
    <header class="container header active" id="home">
    <div class="header-content">
    <div class="left-header">
              <div class="h-shape"></div>
              <div class="image">
                  <img src="src/assets/img/lam.jpg" alt="">
              </div>
          </div>
          <div class="right-header">
              <h1 class="name">
                  Hi, I'm
                    ${Admin.map(function(Ad){
                        return `<span>${Ad.name}</span>`
                    })}
                  A Web Developer.
              </h1>
              ${Information.map(function(infor){
                return `
                    <p>Welcome to my project.${infor.Content}</p>                `
            })}
          </div>
      </div>
</header>
    `
}
export default Header;