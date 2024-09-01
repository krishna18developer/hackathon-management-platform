import { Inter } from '@next/font/google';
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hack Attack",
  description: "Get to know JK's World",
  // set the favicon as Logo
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <div className="min-h-screen ">
          {children}
        </div>
       
      </body>
    </html>
  );
}