import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Shared/Header";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./components/Layout/Main";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import UserDetails from "./components/Home/UserDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main/>,
      children: [
        {
          path: "/",
          element: <Home/>,
          loader: () => fetch('https://dummyjson.com/users')
        },
        {
          path: "/about",
          element: <About/>
        },
        {
          path: "/user-details/:id",
          element: <UserDetails/>,
          loader: ({params}) => fetch(`https://dummyjson.com/users/${params.id}`)
        },
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
