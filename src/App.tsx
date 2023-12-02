import Footer from "./components/Footer";
import Header from "./components/header/Header";
import Hero from "./components/Hero";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Hero />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
