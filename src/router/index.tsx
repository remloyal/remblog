
import { useRoutes } from "react-router-dom"

import Home from "../views/Home"
import List from "../views/List"
import Layout from "../views/Layout"

import Admin from "../views/admin/admin"
import Index from "../views/blog"

const routeConfig = [
    {
        path: '/*',
        element: <Index />
    },
    {
        path: '/Admin',
        element: <Admin />
    },
    {
        path: '/list',
        element: <List />
    },
    {
        path: '/layout',
        element: <Layout />,
        //    children: [
        //         { path: '/children/child1', element: <Child1/> },
        //      { path: '/children/child2', element: <Child2/>  }
        //    ]
    }
]
const Routes = () => (
    useRoutes(routeConfig)
)

export default Routes