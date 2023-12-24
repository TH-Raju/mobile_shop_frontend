import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Search from "../Pages/Home/Search";
import AddMobile from "../Pages/AddMobile";
import Orders from "../Pages/Orders";
import Signup from "../Pages/Authentication/Signup";
import Login from "../Pages/Authentication/Login";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addMobile",
        element: <AddMobile />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/search/:searchTerm",
        loader: ({ params }) =>
          fetch(
            `https://mobile-shop-i004owzzq-th-raju.vercel.app/api/v1/mobile/search?searchTerm=${params.searchTerm}`
          ),
        element: <Search />,
      },
    ],
  },
]);
