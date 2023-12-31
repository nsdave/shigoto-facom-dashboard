import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './components/Dashboard.jsx'
import CreateNews from './components/CreateNews.jsx'
import DeleteNews from './components/DeleteNews.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/dash",
    element: <Dashboard />
  },
  {
    path: "/dash/create",
    element: <CreateNews />
  },
  {
    path: "/dash/delete",
    element: <DeleteNews />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
