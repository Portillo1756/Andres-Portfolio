import { StrictMode } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AboutMe from './pages/AboutMe.jsx';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <AboutMe />,
      },
      {
        path: '/About',
        element: <AboutMe />,
      },
      // {
      //   path: '/Blog',
      //   element: <Blog />,
      // },
      // {
      //   path: '/contact',
      //   element: <ContactMe />,
      // },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)