import Home from "../components/ingredient/home.js";
import About from "../components/ingredient/about";
import Contact from "../components/ingredient/contact.js";
import Lich from "../components/ingredient/lich.js";

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
        { path: '/contact', component: Contact },
                { path: '/lich', component: Lich}


];

export { publicRoutes };
