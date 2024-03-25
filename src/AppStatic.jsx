import './App.css';
import { useState } from 'react'
import {createBrowserRouter,RouterProvider, Outlet} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import Navbar from './components/Navbar';
import About from './components/About';
import NewsStatic from './components/NewsStatic';

const AppStatic = ()=> {
//   const pageSize = 12;
//   const apiKey = import.meta.env.VITE_REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0)
  const router = createBrowserRouter([
    {
      path:"/",
      element :(
      <>
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
        />
        <Outlet/>
   </>),
    children:[
      {
        path: "/",  
        element: <NewsStatic setProgress={setProgress}  key="general" category="general"/>,
      },
      {
        path: "/business",
        element: <NewsStatic setProgress={setProgress} key="business"  category="business"/>,
      },
      {
        path: "/entertainment",
        element: <NewsStatic setProgress={setProgress} key="entertainment"  category="entertainment"/>,
      },
      {
        path: "/health",
        element: <NewsStatic setProgress={setProgress}  key="health"  category="health"/>,
      },
      {
        path: "/science",
        element: <NewsStatic setProgress={setProgress}  key="science"  category="science"/>,
      },
      {
        path: "/sports",
        element: <NewsStatic setProgress={setProgress}  key="sports"   category="sports"/>,
      },
      {
        path: "/technology",
        element: <NewsStatic setProgress={setProgress}  key="technology"   category="technology"/>,
      },
      {
        path: "/about",
        element: <About/>
      }
    ]

    }
  ])
 
    return (
      <>
        <RouterProvider router={router}/>
      </>
    )
 
}

export default AppStatic;