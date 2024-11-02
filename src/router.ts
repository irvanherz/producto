import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/home-page";
import { NotFoundPage } from "./pages/not-found-page";
import { ProductAddPage } from "./pages/product-add-page";
import { ProductUpdatePage } from "./pages/product-update-page";

export const router = createBrowserRouter([
    {
        id: 'home',
        Component: HomePage,
        path: '/'
    },
    {
        id: 'product-list',
        Component: HomePage,
        path: '/products'
    },
    {
        id: 'product-add',
        Component: ProductAddPage,
        path: '/products/add'
    },
    {
        id: 'product-update',
        Component: ProductUpdatePage,
        path: '/products/:productId/edit'
    },
    {
        id: 'not-found',
        Component: NotFoundPage,
        path: '*'
    }
])