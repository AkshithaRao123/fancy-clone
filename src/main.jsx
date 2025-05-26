import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Services from './components/services_page/Services.jsx'
import Home from './components/home_page/Home.jsx'
import Works from './components/works_page/Works.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/services',
        element: <Services />,
      },
      {
        path: '/works',
        element: <Works />,
      },
    ],
    // errorElement: <Error />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)
