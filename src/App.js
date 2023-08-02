import React, { Suspense } from "react";
import { lazy } from "react";
import {
  Outlet,
  Route,
  RouterProvider,
  ScrollRestoration,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import SpecialCase from "./components/SpecialCase/SpecialCase";
import Footer from "./components/home/Footer/Footer";
import FooterBottom from "./components/home/Footer/FooterBottom";
import Header from "./components/home/Header/Header";
import HeaderBottom from "./components/home/Header/HeaderBottom";
import Loading from "./components/Loading/Loading";

const Home = lazy(() => import("./pages/Home/Home"));
const Shop = lazy(() => import("./pages/Shop/Shop"));
const About = lazy(() => import("./pages/About/About"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const Offer = lazy(() => import("./pages/Offer/Offer"));
const ProductDetails = lazy(() =>
  import("./pages/ProductDetails/ProductDetails")
);
const Cart = lazy(() => import("./pages/Cart/Cart"));
const Payment = lazy(() => import("./pages/payment/Payment"));
const Futbolka = lazy(() =>
  import("./components/pageProps/shopPage/shopBy/Futbolka")
);
const Formalar = lazy(() =>
  import("./components/pageProps/shopPage/shopBy/Formalar")
);
const Ryukzak = lazy(() =>
  import("./components/pageProps/shopPage/shopBy/Ryukzak")
);
const Shoes = lazy(() =>
  import("./components/pageProps/shopPage/shopBy/Shoes")
);
const Sumkalar = lazy(() =>
  import("./components/pageProps/shopPage/shopBy/Sumkalar")
);

const Layout = () => {
  return (
    <div>
      <Header />
      <HeaderBottom />
      <SpecialCase />
      <ScrollRestoration />
      <Outlet />
      <Footer />
      <FooterBottom />
    </div>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/product/:_id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/paymentgateway" element={<Payment />} />
        <Route path="/futbolka" element={<Futbolka />} />
        <Route path="/formalar" element={<Formalar />} />
        <Route path="/ryugzak" element={<Ryukzak />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/sumkalar" element={<Sumkalar />} />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router} />
    </div>
  );
}

// Create a new component to wrap App with Suspense for lazy loading
function AppWithSuspense() {
  return (
    <Suspense fallback={<Loading />}>
      <App />
    </Suspense>
  );
}

export default AppWithSuspense;
