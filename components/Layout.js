import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Topbar from "./Topbar";

function Layout({ children }) {
  return (
    <div className="bg-gri ">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Topbar />
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
