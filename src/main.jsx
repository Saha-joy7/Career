import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Component/Root/Root';
import Display from './Component/DIsplay/Display';
import JobFeature from './Component/JobFeature/JobFeature';
import JobList from './Component/JobList/JobList';
import JobDetails from './Component/JobDetails/JobDetails';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path: "/",
        element: <Display></Display>
        
      },
      {
        path: '/statistics',
        element: <JobList></JobList>
      },
      {
        path: "/applied",
        element: <JobFeature></JobFeature>
      },
      {
        path: "/details/:id",
        element: <JobDetails></JobDetails>,
        loader: ()=>fetch('../jobs.json'),
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
