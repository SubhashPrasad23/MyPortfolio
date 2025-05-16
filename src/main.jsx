import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SplashScreen from './components/SplashScreen.jsx'




const router = createBrowserRouter([
  {
    path:"/",
    element:<SplashScreen/>
},
{
  path: "/portfolio",
  element: <App />
}
])





createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />

)
