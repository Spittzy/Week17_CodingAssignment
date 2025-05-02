import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Root from './Root.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
//imported pages
import ErrorPage from './components/ErrorPage.tsx'
import Home from './components/Home.tsx';
import PlantList, { plantListLoader } from './components/PlantList.tsx';
import PlantDetails from './components/PlantDetails.tsx';
import TipsAndTricks from './components/TipsAndTricks.tsx';


const router = createBrowserRouter([{
  path: '/',
  element: <Root />,
  errorElement: <ErrorPage />,
  children: [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: 'tipsandtricks',
      element: <TipsAndTricks />
    },
    {
      path: 'plants',
      element: <PlantList />,
      loader: plantListLoader
    },
    {
      path: '/plants/:plantId',
      element: <PlantDetails />
    }
  ]
}])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)