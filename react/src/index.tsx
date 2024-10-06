import {createRoot} from "react-dom/client";
import {App} from "@/components/App";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
// import {Shop} from "./pages/shop/Shop";
import {Shop} from '@/pages/shop'
import {LazyAbout} from "@/pages/about/About.lazy";
import {Suspense} from "react";
import About from "./pages/about/About";

const root = document.getElementById('root')

if (!root) {
    throw new Error('root not found')
}

const container = createRoot(root)

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/about',
                element: <Suspense fallback={'loading...'}><LazyAbout /></Suspense>
                // element: <About />
            },
            {
                path: '/shop',
                element: <Suspense fallback={'loading...'}><Shop /></Suspense>
                // element: <Shop />
            }
        ]
    },
]);

container.render(<RouterProvider router={router} />)