import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {useContext} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, useOutletContext, redirect, useParams } from 'react-router-dom'


import { UserContext } from './context/UserProvider.jsx'

// PROVIDERS ***************************************
import UserProvider from './context/UserProvider.jsx'
// Loaders *******************************************


/// ICONS ************************************************


// Layouts *************************************************
import RootLayout from './pages/RootLayout.jsx'

// Import Pages *********************************************
import HomePage from './pages/home/HomePage.jsx'
import ErrorPage from './errorPage.jsx'
import About from './pages/about/AboutPage.jsx'
import Login from './pages/login/LoginPage.jsx'
import CreateAccount from './pages/create-account/Create-AccountPage.jsx'
import WallArt from './pages/wallArt/wallArtPage.jsx'
import Albums from './pages/albums/albumsPage.jsx'
import Editing from './pages/editing/editingPage.jsx'
import PreLaunchSpecialPage from './pages/pre-launch/preLaunchSpecial.jsx'
import ProductPage from './pages/productPage/productPage.jsx'

// Company Page imports *********************************************
import ProtectedRoute from './pages/ProtectedRoute.jsx'

import SharePage from './pages/share/share.jsx'
import ReferAFriendPage from './pages/refer-a-friend/refer-a-friend.jsx'
import AlbumsLearnMore from './pages/albums/albumsLearnMore.jsx'
import AlbumsOrder from './pages/albums/albumsOrder.jsx'



const router = createBrowserRouter([
 { 
  path: "/",
  element: <RootLayout/>,
  errorElement: <ErrorPage/>,
  children: [
   {path: '/', element: <HomePage/>},
   {path: '/albums', element: <Albums/>  },
   {path: '/albums/:id', element: <ProductPage/>  },
   {path: '/albums/learn-more', element: <AlbumsLearnMore/>  },
   {path: '/albums/select', element: <AlbumsOrder/>  },
   {path: '/editing', element: <Editing/>},
    {path: '/wall-art', element: <WallArt/>},
    {path: '/About', element: <About/>},
    {path: '/login', element: <Login/>,
    },
    {
      path: '/create-account', 
      element: <CreateAccount/>,
      
    },
    {path: '/Pre-Launch-Special', element: <PreLaunchSpecialPage/>},
    {path: '/Pre-Launch-Special/share', element: <SharePage/>},
    {path: '/Pre-Launch-Special/refer-a-friend', element: <ReferAFriendPage/>}
  ]
  
},

])

ReactDOM.createRoot(document.getElementById('root')).render(
  
  
    <UserProvider>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>,
    </UserProvider>
)
