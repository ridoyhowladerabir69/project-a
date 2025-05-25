import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/errorPage/NotFound";
import Services from "../pages/Services";
import Projects from "../pages/Projects";
import Blog from "../pages/Blog";
import Page from "../pages/Page";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {index: true, element: <Home/>},
            {path: "about", element: <About/>},
            {path: "services", element: <Services/>},
            {path: "projects", element: <Projects/>},
            {path: "blog", element: <Blog/>},
            {path: "page", element: <Page/>},
            {path: "contact", element: <Contact/>},
        ],
    },
    {path: "*", element: <NotFound />},
]);

export default router;