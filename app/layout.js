import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NotesWala! - Notes and Assignments",
  description: "Welcome to NotesWala! Your one-stop destination for all your MCA study needs. Here, you will find comprehensive notes, helpful assignments, and important notifications to assist you in your academic journey at PGRRCDE, Osmania University. Dive in and enhance your learning experience with us!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
