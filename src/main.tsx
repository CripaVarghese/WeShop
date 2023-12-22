import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import ShopContextProvider from "./context/ShopCartContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <ShopContextProvider>
        <App />
      </ShopContextProvider>
    </ChakraProvider>
  </React.StrictMode>
);
