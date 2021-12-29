import React from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";
import Container from "../components/Container";
import client from "../apollo-client";
import { gql } from "@apollo/client";

function haberler({ posts }) {
  return (
    <Layout>
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4   place-items-center md:gap-2">
          {posts.map((post) => (
            <Card
              key={post.id}
              image={post.coverImage.url}
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
          date
          description
        }
      }
    `,
  });

  const { posts } = data;
  return {
    props: {
      posts,
    },
  };
};
