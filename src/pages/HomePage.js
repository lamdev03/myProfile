import Header from "../components/header"
import {MainPage,ContainerAbout, Container, ContainerBlog} from "./MainPage"

const HomePage = () => {
    return /*html*/`
        ${Header};
        ${MainPage};
        ${ContainerAbout};
        ${Container};
        ${ContainerBlog};
        `
    }
export { HomePage} 