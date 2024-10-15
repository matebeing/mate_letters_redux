import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Letter from './pages/Letter'
import './index.css'
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import letterCreateReducer from './slices/letterCreateSlice.js'
import modalSliceReducer from './slices/modalSlice.js'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/letter/:id",
    element: <Letter/>,
  },
]);


const store = configureStore({
  reducer: {
    letterCreate: letterCreateReducer,
    setVisibility: modalSliceReducer
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
