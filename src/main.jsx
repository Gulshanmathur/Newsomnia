import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import AppStatic from './AppStatic';
// import NewsStatic from './components/NewsStatic';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <NewsStatic/> */}
    <AppStatic/>
    {/* <App /> */}
  </React.StrictMode>,
)
