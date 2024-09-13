import { StrictMode } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AboutMe from './component/AboutMe.jsx';
import ErrorPage from './component/ErrorPage.jsx';
import ContactMe from './component/ContactMe.jsx';
import Resume from './component/Resume.jsx';
import HomePage from './pages/HomePage.jsx';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/AboutMe',
        element: <AboutMe />,
      },
      {
        path: '/Contact',
        element: <ContactMe />,
      },
      {
        path: '/Resume',
        element: <Resume />,
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
