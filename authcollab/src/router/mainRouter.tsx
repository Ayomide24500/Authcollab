import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import HomeScreen from "../pages/Homescreen";
import Verifys from "../pages/Auth/Verifys";
import Notification from "../pages/Auth/Notification";
import Login from "../pages/Auth/Login";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login/>
},
{
    path: "/signin",
    element: <Login/>
},
{
    path: "/verifyscreen",
    element: <Verifys/>
},
{
    path: "/notifyscreen",
    element: <Notification/>
},
]);
