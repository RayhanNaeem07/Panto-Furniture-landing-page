import { createBrowserRouter } from "react-router-dom";
import Root from './../components/layout/Root';
import Home from './../pages/home/Home';
import Shop from './../pages/shop/Shop';
import About from './../pages/about/About';
import Contact from './../pages/contact/Contact';

const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children:[
            {
                index: true,
                Component: Home
            },
            {
                path: "shop",
                Component: Shop
            },
            {
                path: "about",
                Component: About
            },
            {
                path: "contact",
                Component: Contact
            }

        ]
    }
]);

export default router;