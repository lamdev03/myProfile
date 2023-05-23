import {HomePage} from "./pages/HomePage.js";
import {render,router} from "./utilities/index.js";
import NotFound from "./pages/NotFound.js";



const app=document.querySelector("#app");

router.on('/',()=>{render(HomePage,app)})
router.notFound(()=>{render(NotFound,app)})


router.resolve();
