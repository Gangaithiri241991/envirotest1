import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './component/home'
import About from './component/about'
import News from './component/news'
import News1 from './component/news1'
import News2 from './component/news2'
import News3 from './component/news3'
import Doctor from './component/doctor'
import Elearning from './component/Elearning'
import Hrms from './component/hrms'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router=createBrowserRouter([
  {
    path:"/",
   element:<App/>
  },
  {
  path:"/",
 element:<Home/>
},
{
  path:"/about",
  element:<About/>
},
{
  path:"/news",
  element:<News/>
},
{
  path:"/news1",
  element:<News1/>
},{
  path:"/news2",
  element:<News2/>
},
{
  path:"/news3",
  element:<News3/>
},
{
  path:"/doctor1",
  element:<Doctor/>
},
{
  path:"/elearning1",
  element:<Elearning/>
},
{
  path:"/hrms",
  element:<Hrms/>
},
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <RouterProvider router={router} />
    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
