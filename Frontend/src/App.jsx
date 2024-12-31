import {Outlet ,createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Myparcels from "./pages/Myparcels"
import Parcel from "./pages/Parcel"
import Parcels from "./pages/Parcels"
import { useSelector } from "react-redux"
import Page404 from "./pages/Page404"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
  const user = useSelector((state)=> state.user)

const Layout = () => {
  return (
   <div>
      <Navbar />

        
       
          <Outlet />
     
     

      <Footer />

    </div>
  );
};

const router = createBrowserRouter([
  {
  path:"/",
  element: <Layout/>,
  children:[
    {
  
      path:"/", 
      element:<Home/>
    
  },
       {
      path:"/myparcels", 
      element:user.currentUser ? <Myparcels/> : <Navigate to="/login"/>
    },
    {
      path:"/parcel/:id", 
      element:user.currentUser ? <Parcel/> : <Navigate to="/login"/>
    },
    {
      path:"/allparcels", 
      element:user.currentUser ? <Parcels/> : <Navigate to="/login"/>
    },
    {
      path:"*", 
      element:<Page404/>
    },
  ]
},
 {
  path:"/login", 
  element:<Login/>
},
])
  return (
    <>
  <RouterProvider router={router}/>
    </>
  )
}

export default App

