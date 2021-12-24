import Head from "next/head";
import React from "react";
import Layout from "../components/Layout";
import PostBody from "../components/PostBody";
import PostHeader from "../components/PostHeader";
import Container from "../components/Container";

function haber() {
  return (
    <Layout>
      <Container>
        <article>
          <Head>
            <title>Haber Başlık</title>
            <meta
              property="og:image"
              content="https://placekitten.com/1000/300"
            />
          </Head>
          <PostHeader
            title="Haber Başlık"
            coverImage={"https://placekitten.com/1000/300"}
          />
          <PostBody
            content={
              "TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST"
            }
          />
        </article>
      </Container>
    </Layout>
  );
}

export default haber;
