import { gql } from "@apollo/client";
import Image from "next/image";
import React from "react";
import client from "../apollo-client";
import Layout from "../components/Layout";

function galeri({ galeris }) {
  return (
    <Layout>
      <Image
        src="/images/galeri-header.png"
        layout="responsive"
        height={338}
        width={1240}
        priority={true}
      />
      <div className="flex bg-mavimsi md:w-72 w-44 mx-auto md:-mt-12 -mt-9  relative">
        <span className="font-[Roboto] font-bold md:text-4xl text-2xl text-beyaz md:py-4 md:px-14 py-2 px-7">
          Fotoğraflar
        </span>
      </div>

      <div className="masonry md:px-24 md:py-36 py-10 px-8 ">
        {galeris.map((resim) => (
          <div className="rounded-lg overflow-hidden mb-8 " key={resim.id}>
            <Image
              className="rounded-lg transform transition duration-500 hover:scale-125"
              src={resim.image.url}
              width={resim.image.width}
              height={resim.image.height}
            />
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default galeri;

export const getStaticProps = async (req, res) => {
  const { data } = await client.query({
    query: gql`
      query resimler {
        galeris {
          id
          image {
            url
            width
            height
          }
          altEtiketi
        }
      }
    `,
  });

  const { galeris } = data;
  return {
    props: {
      galeris,
    },
  };
};
