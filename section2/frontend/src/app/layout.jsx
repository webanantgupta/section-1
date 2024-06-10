import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import PrelineScript from "@/components/prelineScript";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import '@mantine/core/styles.css';
import { MantineProvider } from "@mantine/core";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* to show in all the pages */}

        <Navbar />
        <Toaster position="top-right" />
        <MantineProvider>
          {children}
          </MantineProvider>
        <Footer />
        <PrelineScript />
      </body>

    </html>
  );
}
