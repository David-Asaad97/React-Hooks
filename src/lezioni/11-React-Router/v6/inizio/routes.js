import Home from "./screen/Home"
import About from "./../inizio/screen/About";
import Profile from "./screen/Profile";
import ErrorPage from "./ErrorPage";
import SingleProfile from "./screen/SigleProfile";
import MyProfile from "./screen/MyProfile";



import React from "react";

export const routes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/profile",
      element: <Profile />,
      children: [
        {
          path: "me",
          element: <MyProfile />,
        },
        {
          path: ":id",
          element: <SingleProfile />,
        },
      ],
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ];
  