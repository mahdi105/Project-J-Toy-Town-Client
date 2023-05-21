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
                loader: ({params}) => fetch(`http://localhost:5000/toy/${params.id}`)
            },
            {
                path: '/allToys',
                element: <AllToys></AllToys>,
                loader: ()=> fetch('http://localhost:5000/toys')
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
                path: '/updateToy',
                element: <UpdateToy></UpdateToy>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ])
        
    }
])

export default router;