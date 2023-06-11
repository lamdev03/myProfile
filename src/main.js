import { render, router } from "./lib/index.js";
import HomePage from "./pages/HomePage.js";
import NotFound from "./pages/NotFound.js";
import MyProfilePage from "./pages/admin/page/MyProfilePage.js";
import ProjectAddPage from "./pages/admin/page/ProjectAdd.js";
import ProjectAdminPage from "./pages/admin/page/ProjectPage.js";
import ProductAdminPage from "./pages/admin/page/UserPage.js";
import signin from "./pages/admin/signin.js";
import signup from "./pages/admin/signup.js";



const app=document.querySelector("#app");

router.on('/',()=>render(HomePage,app))
router.on('/signup',()=>render(signup,app))
router.on('/signin',()=>render(signin,app))

// private router
router.on("/admin/*", () => {}, {
    before(next) {
        const { user } = JSON.parse(localStorage.getItem("user")) || {};
        if (!user) return (window.location.href = "/");
        if (user && user.id != "1") return (window.location.href = "/signin");
        next();
    },
});
//admin
router.on('/admin/user',()=>render(ProductAdminPage,app))
router.on('/admin/project',()=>render(ProjectAdminPage,app))
router.on('/admin/project/add',()=>render(ProjectAddPage,app))
router.on('/admin/profile',()=>render(MyProfilePage,app))

router.notFound(()=>render(NotFound,app))


router.resolve();
