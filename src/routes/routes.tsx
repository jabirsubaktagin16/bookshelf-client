import App from "@/App";
import BookDetails from "@/pages/BookDetails";
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
        path: "borrow-summary",
        element: <BorrowSummary />,
      },
    ],
  },
  {
    path: "/books",
    element: <App />,
    children: [
      {
        path: "",
        element: <ViewBooks />,
      },
      {
        path: ":id",
        element: <BookDetails />,
      },
    ],
  },
]);
