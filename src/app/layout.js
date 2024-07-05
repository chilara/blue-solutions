import { Inter } from "next/font/google";
import "./globals.css";
// import { ApiProvider } from "../context/ApiContext";
import Navbar from "@/component/custom/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blutech",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    // <ApiProvider>
      <html lang="en">
        <body className={inter.className}>
          <div className="bg-[#fafafa]">{children}</div>
        </body>
      </html>
    // </ApiProvider>
  );
}
