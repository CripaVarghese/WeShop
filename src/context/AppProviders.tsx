import { ChakraProvider } from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import AppRouter from "../router/AppRouter";
import AuthProvider from "./AuthProvider";


const AppProviders: FC<{ children: ReactNode }> = ({ children })  => {
    
    return (
        <ChakraProvider>
                <AppRouter>
                        {children}
                </AppRouter>
        </ChakraProvider>
    );
};


export default AppProviders;
