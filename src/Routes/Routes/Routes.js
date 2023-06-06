import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../pages/Home/Home/Home";
import About from "../../pages/About/About/About";
import Services from "../../pages/Services/Services/Services";
import Pricing from "../../pages/Pricing/Pricing/Pricing";
import Blog from "../../pages/Blog/Blog/Blog";
import Contact from "../../pages/Contact/Contact/Contact";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>, 
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/pricing',
                element: <Pricing></Pricing>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            
        ]
    }
])

export default router;