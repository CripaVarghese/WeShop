import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import ErrorPage from "../components/ErrorPage";
import Bag_Page from "../components/bag/Bag_Page";
import Category from "../components/Category";
import Header from "../components/header/Header";

export const UnauthenticatedRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="men" element={<Category />} />
        <Route path="Bag_Page" element={<Bag_Page />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
