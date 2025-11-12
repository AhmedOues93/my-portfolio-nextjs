import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import SocialLinks from "../components/SocialLinks";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ahmed Oueslati Portfolio",
  description: "Junior Full-Stack Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className={`${inter.className} scroll-smooth`}>
        <Navbar />
        <SocialLinks />
        {children}
      </body>
    </html>
  );
}
