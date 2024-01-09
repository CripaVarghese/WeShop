import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import BagPage from "./components/bag/BagPage";
import Category from "./components/category/Category";
import Header from "./components/header/Header";
import SelectedProductDetails from "./components/selected_product_details/SelectedProductDetails";
import WishlistPage from "./components/wishList/WishlistPage";
import WishlistProdAdded from "./components/wishList/WishlistProdAdded";
import BagEmpty from "./components/bag/BagEmpty";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ProductInCart from "./components/category/ProductInCart";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/men" element={<Category />} />
        <Route path="/bag-page" element={<BagPage />} />
        <Route path="/bag-empty" element={<BagEmpty />} />
        <Route path="/wishlist-page" element={<WishlistPage />} />
        <Route path="/wishlist-prodAdded" element={<WishlistProdAdded />} />
        <Route
          path="/selected-product-details"
          element={<SelectedProductDetails />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
