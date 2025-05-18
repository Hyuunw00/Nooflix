import "./globals.css";
import Footer from "../components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <section
          className=" max-w-lg  min-h-screen mx-auto   flex flex-col
          [box-shadow:0px_7px_29px_0px_rgba(100,100,111,0.2)]"
        >
          {/* <Header /> */}
          <main className="flex-1  pb-[100px] min-h-[calc(100vh-60px)]  ">
            {children}
          </main>
          <Footer />
        </section>
      </body>
    </html>
  );
}
