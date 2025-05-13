import "./globals.css";
import Footer from "../components/footer";
import Header from "../components/header";
// import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* <div className="fixed inset-0 -z-10">
          <Image
            src={"/ogimage.png"}
            alt={""}
            width={1920}
            height={1080}
            className="w-screen h-screen object-cover"
          />
        </div> */}
        <section
          className="relative z-10 max-w-lg   min-h-screen mx-auto   flex flex-col
          [box-shadow:0px_7px_29px_0px_rgba(100,100,111,0.2)]"
        >
          <Header />
          <main className="flex-1  pb-[100px] min-h-[calc(100vh-60px)]  ">
            {children}
          </main>
          <Footer />
        </section>
      </body>
    </html>
  );
}
