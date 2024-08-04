import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import { Route } from 'react-router-dom'
import User from './components/User/User.jsx'
import Github, { GithubInfoLoader } from './components/Github/Github.jsx'
import Support from './components/Support/Support.jsx'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home/>,
         

//       },
//       {
//         path: "About",
//         element: <About/>,
//       },
//       {
//         path: "Contact",
//         element: <Contact/>,
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}  >

      <Route  path='' element={<Home/>} />
      <Route  path='About' element={<About/>} />
      <Route  path='Contact' element={<Contact/>} />
      <Route  path='user/:userid' element={<User/>} />
      <Route  loader={GithubInfoLoader} path='Github' element={<Github/>} />
      <Route  path='Support' element={<Support/>} />


    </Route>

  )
)







ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> ---------------------- */}
    <RouterProvider router={router}  />

  </React.StrictMode>,
)
