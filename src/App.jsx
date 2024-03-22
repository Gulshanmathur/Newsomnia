import './App.css';
import { useState } from 'react'
import News from './components/News';
import {createBrowserRouter,RouterProvider, Outlet} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import Navbar from './components/Navbar';
import About from './components/About';

const App = ()=> {
  const pageSize = 12;
  const apiKey = import.meta.env.VITE_REACT_APP_NEWS_API;
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
        element: <News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/>,
      },
      {
        path: "/business",
        element: <News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business"/>,
      },
      {
        path: "/entertainment",
        element: <News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>,
      },
      {
        path: "/health",
        element: <News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health"/>,
      },
      {
        path: "/science",
        element: <News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science"/>,
      },
      {
        path: "/sports",
        element: <News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports"/>,
      },
      {
        path: "/technology",
        element: <News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology"/>,
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

export default App;