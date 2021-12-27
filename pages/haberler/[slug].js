import Head from "next/head";
import React from "react";
import Layout from "../../components/Layout";
import PostBody from "../../components/PostBody";
import PostHeader from "../../components/PostHeader";
import Container from "../../components/Container";
import client from "../../apollo-client";
import { gql } from "@apollo/client";

function haber({ post }) {
  return (
    <Layout>
      <Container>
        <article>
          <Head>
            <title>{post.title}</title>
            <meta property="og:image" content={post.coverImage.url} />
          </Head>
          <PostHeader
            title={post.title}
            coverImage={post.coverImage.url}
            width={post.coverImage.width}
            height={300}
            // height={post.coverImage.height}
          />
          <PostBody content={post.content.html} />
        </article>
      </Container>
    </Layout>
  );
}

export default haber;

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query AllPostQuery {
        posts {
          slug
        }
      }
    `,
  });

  const paths = data.posts.map((post) => ({
    params: { slug: post.slug },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const { data, errors } = await client.query({
    query: gql`
      query PostDetailQuery($slug: String!) {
        __typename
        post(where: { slug: $slug }) {
          id
          title
          content {
            html
          }
          coverImage {
            url
            width
            height
          }
          date
          description
        }
      }
    `,
    variables: {
      slug,
    },
  });

  // Pass post data to the page via props
  return { props: { post: data.post }, revalidate: 10 };
}
