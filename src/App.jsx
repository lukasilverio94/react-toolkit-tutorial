import Product from "./components/Product";
import Dashboard from "./components/Dashboard";
import Cart from "./components/Cart";
import RootLayout from "./components/RootLayout";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { Route } from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Dashboard />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
