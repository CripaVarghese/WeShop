import ShoppingCartProvider from "./context/ShoppingCartContext";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Category from "./components/Category";

function App() {
  return (
    <ShoppingCartProvider>
      <Header />
      {/* <Hero /> */}
      <Category />
      <Footer />
    </ShoppingCartProvider>
  );
}

export default App;
