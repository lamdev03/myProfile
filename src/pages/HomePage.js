import Header from "../components/header"
import {MainPage,ContainerAbout, Container} from "./MainPage"

const HomePage=()=>{
    return (/*html*/`
        ${Header}
        ${MainPage}
        ${ContainerAbout}
        ${Container}
        <div class="theme-btn">
        <i class="fas fa-adjust"></i>  
    </div>`
    )}
export { HomePage} 