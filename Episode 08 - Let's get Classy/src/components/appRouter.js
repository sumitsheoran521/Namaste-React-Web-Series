import Body from "./Body";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Header from "./Header";
import { createBrowserRouter, Outlet } from "react-router-dom";
import RestaurantMenu from "./RestaurantMenu";

const AppLayout = () => {
    return (
      <div className="app">
        <Header />
        <Outlet />
      </div>
    );
  };

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

export default appRouter;
