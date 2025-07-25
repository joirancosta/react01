import { Routes, Route } from "react-router";

import { Layout } from "../components/Layout/index.tsx";

import { Home } from "../pages/Home.tsx";
import { Products } from "../pages/Products.tsx";
import { NotFound } from "../pages/NotFound.tsx";
import { Details } from "../pages/Details.tsx";

export function AppRoutes(){
    return (
        <Routes>
            <Route path="/" element={ <Layout /> }  >
                <Route path="/" index element={ <Home /> } />
                <Route path="/products" element={ <Products /> } />
                <Route path="/details/:id" element={ <Details /> } />                
            </Route>
            <Route path="*" element={ <NotFound /> } />
        </Routes>
    )
}