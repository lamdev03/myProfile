import { Admin, Information } from "../data";

const Header =() => {
    return /*html*/`
    <header class="container header active" id="home">
    <div class="header-content">
    <div class="left-header">
              <div class="h-shape"></div>
              <div class="image">
                  <img src="img/lam.jpg" alt="">
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