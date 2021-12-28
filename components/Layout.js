import Head from "next/head";
import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Topbar from "./Topbar";
import client from "../apollo-client";
import { gql } from "@apollo/client";


function Layout({ children }) {
  const [posts, setPosts] = useState([]);

  const fetchData = async () => {
    const { data } = await client.query({
      query: gql`
        query AllPostQuery {
          posts(first: 2, orderBy: date_DESC) {
            id
            slug
            title
            content {
              html
            }
            coverImage {
              url
            }
            date
            description
          }
        }
      `,
    });
    setPosts(data?.posts);
  };

  useEffect(() => {
    fetchData();
    return () => {};
  }, [fetchData]);

  return (
    <div className="bg-gri ">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charSet="utf-8"
        ></script>
      </Head>
      <Topbar />
      <Header />
      {children}
      <Footer posts={posts} />
    </div>
  );
}

export default Layout;
