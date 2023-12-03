import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import ErrorPage from "../components/ErrorPage";
import Bag_Page from "../components/bag/Bag_Page";
import Category from "../components/category/Category";
import Header from "../components/header/Header";
import SelectedProductDetails from "../components/selected_product_details/SelectedProductDetails";
import Wishlist_Page from "../components/wishList/Wishlist_Page";
import Wishlist_prodAdded from "../components/wishList/Wishlist_prodAdded";
import Bag_Empty from "../components/bag/Bag_Empty";

export const UnauthenticatedRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/men" element={<Category />} />
        <Route path="/bag-page" element={<Bag_Page />} />
        <Route path="/bag-empty" element={<Bag_Empty />} />
        <Route path="/wishlist-page" element={<Wishlist_Page />} />
        <Route path="/wishlist-prodAdded" element={<Wishlist_prodAdded />} />
        <Route
          path="/selected-product-details"
          element={<SelectedProductDetails />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
