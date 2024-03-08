import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Bank from "./Pages/BankPage/Bank.jsx";
import SendCongrat from "./Pages/Congrat/SendCongrat.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "Bank",
        element: <Bank />,
    },
    {
        path: "Congrats",
        element: <SendCongrat />,
    },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
