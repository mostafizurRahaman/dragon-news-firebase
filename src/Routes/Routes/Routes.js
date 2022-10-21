import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Category from "../../Pages/Category/Category/Category";
import Home from "../../Pages/Home/Home/Home";
import News from "../../Pages/News/News/News";
import TermsAndServices from "../../Pages/Other/TermsAndServices/TermsAndServices";
import Profile from "../../Pages/Profile/Profile";
import Login from "../../Pages/Shared/Login/Login";
import Register from "../../Pages/Shared/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
   {
      path: "/",
      element: <Main></Main>,
      children: [
         {
            path: "/",
            element: <Home></Home>,
            loader: () =>
               fetch(" https://dragron-news-severside.vercel.app/news"),
         },
         {
            path: "/home",
            element: <Home></Home>,
            loader: () =>
               fetch(" https://dragron-news-severside.vercel.app/news"),
         },
         {
            path: "/category/:id",
            element: (
               <PrivateRoute>
                  <Category></Category>
               </PrivateRoute>
            ),
            loader: async ({ params }) => {
               return fetch(
                  ` https://dragron-news-severside.vercel.app/category/${params.id}`
               );
            },
         },
         {
            path: "/news/:id",
            element: (
               <PrivateRoute>
                  <News></News>
               </PrivateRoute>
            ),
            loader: ({ params }) =>
               fetch(
                  ` https://dragron-news-severside.vercel.app/news/${params.id}`
               ),
         },
         {
            path: "/login",
            element: <Login></Login>,
         },
         {
            path: "/register",
            element: <Register></Register>,
         },
         {
            path: "/terms",
            element: <TermsAndServices></TermsAndServices>,
         },
         {
            path: "/profile",
            element: (
               <PrivateRoute>
                  {" "}
                  <Profile></Profile>{" "}
               </PrivateRoute>
            ),
         },
         {
            path: "*",
            element: <h1>Not found</h1>,
         },
      ],
   },
]);
