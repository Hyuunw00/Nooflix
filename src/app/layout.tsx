import "./globals.css";
import Footer from "../components/footer";
import Header from "../components/header";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="fixed inset-0 -z-10">
          <Image
            src={"/ogimage.png"}
            alt={""}
            width={1920}
            height={1080}
            className="w-screen h-screen object-cover"
          />
        </div>
        <section className="relative z-10 max-w-lg   min-h-screen mx-auto  bg-black text-white flex flex-col ">
          <Header />
          <main className="flex-1 ">{children}</main>
          <Footer />
        </section>
      </body>
    </html>
  );
}
