import {MainPage,ContainerAbout, Container, Home} from "./MainPage"

const HomePage = () => {
    
    return /*html*/`
        ${Home()}
        ${MainPage()}
        ${ContainerAbout()}
        ${Container()}
        `
    }
export default HomePage 