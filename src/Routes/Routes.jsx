import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Pages/Home";
import Login from "../components/Pages/Login";
import Register from "../components/Pages/Register";
import Main from "../Layouts/Main";
import ToyDetails from "../components/Pages/ToyDetails";
import AllToys from "../components/Pages/AllToys";
import MyToys from "../components/Pages/MyToys";
import AddToy from "../components/Pages/AddToy";
import UpdateToy from "../components/Pages/UpdateToy";
import Blog from "../components/Pages/Blog";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage/>,
        children: ([
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/toy/:id',
                element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
                loader: ({params}) => fetch(`https://toy-town-server-mahdi105.vercel.app/toy/${params.id}`)
            },
            {
                path: '/allToys',
                element: <AllToys></AllToys>,
                loader: ()=> fetch('https://toy-town-server-mahdi105.vercel.app/toys')
            },
            {
                path: '/myToys',
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
            },
            {
                path: '/addAtoy',
                element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
            },
            {
                path: '/updateToy/:id',
                element: <PrivateRoute><UpdateToy></UpdateToy></PrivateRoute>,
                loader: ({params}) => fetch(`https://toy-town-server-mahdi105.vercel.app/toy/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ])
        
    }
])

export default router;