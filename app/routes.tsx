import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "./pages/Home";
import OurStory from "./pages/OurStory";
import Shop from "./pages/Shop";
import UseCare from "./pages/UseCare";
import ReviewsAwards from "./pages/ReviewsAwards";
import PartnerWithUs from "./pages/PartnerWithUs";
import Login from "./pages/Login";
import ProductDetail from "./pages/ProductDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "our-story", Component: OurStory },
      { path: "shop", Component: Shop },
      { path: "product/:id", Component: ProductDetail },
      { path: "use-care", Component: UseCare },
      { path: "reviews-awards", Component: ReviewsAwards },
      { path: "partner-with-us", Component: PartnerWithUs },
      { path: "login", Component: Login },
    ],
  },
]);
