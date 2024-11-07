import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Parcels from "./pages/Parcels";
import Parcel from "./pages/Parcel";
import NewParcel from "./pages/NewParcel";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Users from "./pages/Users";
import NewUser from "./pages/NewUser";
import Login from "./pages/Login"

function App() {
  const Layout = () => {
    return (
      <div>
          <Navbar />

       <div className="flex">
        <div className="w-[20%]">
          <Menu />
        </div>
        <div className="w-[80%]">
          <Outlet />
        </div>
        </div>
      
          <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/parcels", element: <Parcels /> },
        { path: "/newparcel", element: <NewParcel /> },
        { path: "/parcel/:parcelId", element: <Parcel /> },
        { path: "/users", element: <Users /> },
        { path: "/newuser", element: <NewUser /> },
        { path: "/", element: <Home /> }
      ],
    },
    {
      path:"/login",
      element:<Login/>
    }
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
