import Navbar from "@components/header";
import Footer from "@components/footer";
import { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
