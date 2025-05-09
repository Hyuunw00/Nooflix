import "./globals.css";
import Footer from "../components/footer";
import Header from "../components/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <section className="max-w-xl min-h-screen mx-auto  flex flex-col shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)]">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </section>
      </body>
    </html>
  );
}
