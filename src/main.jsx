import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './pages/Feed.jsx'
import './pages/Internships.jsx'
import './pages/Community.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Community from './pages/Community.jsx'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Feed />,
//   },
//   {
//     path: '/Community', 
//     element: <Community />
//   },
//   {
//     path: '/Internships', 
//     element: <Internships />
//   }
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  ,
)
