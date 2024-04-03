import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import AppRoutes from './Utils/AppRoutes';
export const API_URL='https://6607bc4ba2a5dd477b135683.mockapi.io/Axios'
function App() {
  const router=createBrowserRouter(AppRoutes)
  return <>
  <RouterProvider router={router}/>
  </>
}

export default App