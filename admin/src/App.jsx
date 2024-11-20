import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Parcels from "./pages/Parcels";
import Parcel from "./pages/Parcel";
import NewParcel from "./pages/NewParcel";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Users from "./pages/Users";
import NewUser from "./pages/NewUser";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/profile";
import Page404 from "./pages/Page404";
import Orders from "./pages/Orders";
import Parcelstatus from "./pages/Parcelstatus"
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user);
  const Layout = () => {
    return (
      <div>
        <Navbar />

        <div className="flex relative">
       
       

          <div className="  ">
            <Menu />
           
          </div>
        
          <div className="w-[89%] ">
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
        { path: "/parcels", element: user.currentUser ? <Parcels />: <Navigate to="/login"/> },
        { path: "/newparcel", element: user.currentUser ? <NewParcel />: <Navigate to="/login"/> },
        { path: "/parcel/:parcelId", element: user.currentUser ? <Parcel />: <Navigate to="/login"/>},
        { path: "/parcel/status/:parcelId", element: user.currentUser ? <Parcelstatus />: <Navigate to="/login"/>},
        { path: "/users", element: user.currentUser ? <Users />: <Navigate to="/login"/>},
        { path: "/newuser", element: user.currentUser ? <NewUser />: <Navigate to="/login"/> },
        { path: "/", element: user.currentUser ? <Home />: <Navigate to="/login"/>},
        {
          path: "/profile",
          element: user.currentUser ? <Profile /> : <Navigate to="/login" />,
        },
        {
          path: "/orders",
          element:user.currentUser ? <Orders/>:  <Navigate to="/login" />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
       
      {
      path: "*",
      element: <Page404/>,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
