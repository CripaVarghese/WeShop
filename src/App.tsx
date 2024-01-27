import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Category from "./components/category/Category";
import Header from "./components/header/Header";
import SelectedProductDetails from "./components/selected_product_details/SelectedProductDetails";
import BagEmpty from "./components/bag/BagEmpty";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import WishlistEmpty from "./components/wishList/WishlistEmpty";
import WishlistPage from "./components/wishList/WishlistPage";
import WishlistProdAdded from "./components/wishList/WishlistProdAdded";
import BagProdAdded from "./components/bag/BagProdAdded";
import BagPage from "./components/bag/BagPage";
import Login from "./components/category/login/Login";
import AppLayout from "./AppLayout";
import EmptyPage from "./components/EmptyPage";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Hero />} />
          <Route path="/men" element={<Category />} />
          <Route path="/bag-page" element={<BagPage />} />
          <Route path="/bag-product-added" element={<BagProdAdded />} />
          <Route path="/bag-empty" element={<BagEmpty />} />
          <Route path="/wishlist-page" element={<WishlistPage />} />
          <Route path="/wishlist-empty" element={<WishlistEmpty />} />
          <Route path="/wishlist-prodAdded" element={<WishlistProdAdded />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/empty_page"
            element={<EmptyPage isOpen={undefined} onClose={undefined} />}
          />

          <Route
            path="/selected-product-details"
            element={<SelectedProductDetails />}
          />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};
