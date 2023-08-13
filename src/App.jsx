import { useState } from 'react'
import './App.css'
import ListVideos from './Component/ListVideos/ListVideos'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Videos from './Component/Videos/Videos';
import NavBar from './Component/NavBar/NavBar';

const router = createBrowserRouter([
  {
    path: "/videos/:video_Id",
    element: <div>
      <NavBar/>
      <Videos/>
    </div>
  },
  {
    path: "/",
    element: <div>
    <NavBar/>
    <ListVideos/>
  </div>
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
