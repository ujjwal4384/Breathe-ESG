import React, { useEffect, useState } from 'react'

import LandingPage from './Components/LandingPage/LandingPage'
import Login from './Components/Login/Login'
import SignUp from './Components/Signup/SignUp'
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  useNavigate,
} from 'react-router-dom'
import { signup, verify } from './controllers/auth.js'
import { Triangle } from 'react-loader-spinner'

function PrivateRoute({ children, ...rest }) {
  const token = sessionStorage.getItem('breathe_token')
  return !token ? children : <Navigate to="/dashboard" />
}

function PrivateRouteLoggedIn({ children, ...rest }) {
  const [isLoading, setLoading] = useState(true)
  const navigate = useNavigate()
  const token = sessionStorage.getItem('breathe_token')
  useEffect(() => {
    if (!token) {
      navigate('/login')
    }
    async function verifyToken() {
      try {
        const response = await verify()
        setLoading(false)
      } catch (error) {
        navigate('/login')
      }
    }
    verifyToken()
  })
  return isLoading ? (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Triangle
        height="120"
        width="120"
        color="#4fa94d"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  ) : (
    children
  )
}

const router = createBrowserRouter([
  {
    path: '/login',
    element: (
      <PrivateRoute>
        <Login />
      </PrivateRoute>
    ),
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRouteLoggedIn>
        <LandingPage />
      </PrivateRouteLoggedIn>
    ),
  },
  {
    path: '/signup',
    element: (
      <PrivateRoute>
        <SignUp />
      </PrivateRoute>
    ),
  },
  {
    path: '/*',
    element: (
      <PrivateRouteLoggedIn>
        <LandingPage />
      </PrivateRouteLoggedIn>
    ),
  },
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
