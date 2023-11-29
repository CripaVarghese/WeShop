import ShoppingCartProvider from "./context/ShoppingCartContext";
import Footer from "./components/Footer";
import Header from "./components/header/Header";
import Hero from "./components/Hero";
import { Stack } from "@chakra-ui/react";

function App() {
  return (
    <ShoppingCartProvider>
      <Header />
      <Hero />
      <Footer />
    </ShoppingCartProvider>
  );
}

export default App;
