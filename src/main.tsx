import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { UnauthenticatedRoutes } from "./routes/UnauthenticatedRoutes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <UnauthenticatedRoutes />
    </ChakraProvider>
  </React.StrictMode>
);
