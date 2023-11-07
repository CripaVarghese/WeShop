import ShoppingCartProvider from "./context/ShoppingCartContext";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Category from "./components/Category";
import { navbarOptionsData } from "./constants/navbarOptionsData";

function App() {
  return (
    <ShoppingCartProvider>
      <Header />
      {/* <Hero /> */}
      <Category data={navbarOptionsData} />
      <Footer />
    </ShoppingCartProvider>
  );
}

export default App;
