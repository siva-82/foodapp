// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import {  createBrowserRouter,  createRoutesFromElements,  Route,  RouterProvider} from "react-router-dom";
// import './index.css'
// import { Auth0Provider } from '@auth0/auth0-react';

// import Home from "./components/Home.jsx";
// // import Foods from "./pages/Foods.jsx";
// import Store from "./pages/Store.jsx";
// import Success from './pages/Success.jsx'
// import Cancel from './pages/Cancel.jsx'
// import CartProvider from './CartContext.jsx';

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App />}>
//       <Route index={true} path="/" element={<Home />} />
  
//       <Route path="/Food" element={<Store />} />      
//       <Route path="/success" element={<Success />} />
//       <Route path="/cancel" element={<Cancel />} />

//     </Route>
//   )
// );
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <CartProvider>
//     <Auth0Provider
//      domain="dev-t3z55qcujr63vtrd.us.auth0.com"
//      clientId="ZlOfHrcs8eDdFSgHhgJhxIoKbS3LRC4I"
//      authorizationParams={{
//        redirect_uri: window.location.origin
//     }}
//   >
//      <RouterProvider router={router} />
//      </Auth0Provider>
//      </CartProvider>
//   </React.StrictMode>,
// )
