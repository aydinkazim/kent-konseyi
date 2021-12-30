import React from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";
import Container from "../components/Container";
import client from "../apollo-client";
import { gql } from "@apollo/client";
import Head from "next/head";

function haberler({ posts, haberSayfasi }) {
  return (
    <Layout>
      <Head>
        <title>{haberSayfasi.metaTitle}</title>
        <meta name="description" content={haberSayfasi.metaDescription} />
        <meta property="og:image" content={haberSayfasi.image.url} />
      </Head>
      <Container>
        <h1 className="font-[Roboto] font-bold md:text-4xl text-2xl text-center mb-10">
          Haberler
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center md:gap-2">
          {posts.map((post) => (
            <Card
              key={post.id}
              image={post.coverImage.url}
              imageAltText={post.imageAltText}
              description={post.description}
              date={post.date}
              slug={post.slug}
            />
          ))}
        </div>
      </Container>
    </Layout>
  );
}

export default haberler;

export const getStaticProps = async (req, res) => {
  const { data } = await client.query({
    query: gql`
      query AllPostQuery {
        posts(orderBy: date_DESC) {
          id
          slug
          title
          content {
            html
          }
          coverImage {
            url
          }
          imageAltText
          date
          description
        }
        haberSayfasi(where: { id: "ckxt9c14wrago0b06rumhg26q" }) {
          metaTitle
          metaDescription
          image {
            url
          }
        }
      }
    `,
  });

  const { posts, haberSayfasi } = data;
  return {
    props: {
      posts,
      haberSayfasi,
    },
  };
};
