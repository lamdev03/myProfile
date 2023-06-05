import { render, router } from "./lib/index.js";
import HomePage from "./pages/HomePage.js";
import NotFound from "./pages/NotFound.js";



const app=document.querySelector("#app");

router.on('/',()=>render(HomePage,app))
router.notFound(()=>render(NotFound,app))


router.resolve();
