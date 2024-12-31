import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RootLayout() {
  return (
    <div className="flex flex-col w-full h-full min-h-screen seoul-hangang text-[#fff] bg-black">
      <header className="fixed top-0 left-1/2 -translate-x-1/2 z-10 w-full max-w-[600px]  ">
        <Header />
      </header>
      <main className="text-gray-200 flex-1 mt-[70px] mb-[70px] h-[calc(100vh-140px)]">
        <Outlet />
      </main>
      <footer className="fixed bottom-0 left-1/2 -translate-x-1/2 z-10 w-full max-w-[600px] py-4 px-2 bg-[#1C1C1C]">
        <Footer />
      </footer>
    </div>
  );
}
