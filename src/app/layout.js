import { Inter } from "next/font/google";
import "./globals.css";
import { ApiProvider } from "../context/apiContext";
import { ChakraProvider } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blutech",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider>
          <ApiProvider>
            <div className="bg-[#fafafa]">{children}</div>
          </ApiProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}
