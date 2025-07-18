import App from "@/App";
import BorrowSummary from "@/pages/BorrowSummary";
import Home from "@/pages/Home";
import ViewBooks from "@/pages/ViewBooks";
import { createBrowserRouter } from "react-router";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        path: "",
        element: <Home />,
      },
      {
        path: "books",
        element: <ViewBooks />,
      },
      {
        path: "borrow-summary",
        element: <BorrowSummary />,
      },
    ],
  },
]);
