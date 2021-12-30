import { gql } from "@apollo/client";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import client from "../apollo-client";
import Layout from "../components/Layout";

function galeri({ galeris, galeriSayfasi }) {
  return (
    <Layout>
      <Head>
        <title>{galeriSayfasi.metaTitle}</title>
        <meta name="description" content={galeriSayfasi.metaDescription} />
        <meta property="og:image" content={galeriSayfasi.image.url} />
      </Head>
      <Image
        src={galeriSayfasi.image.url}
        layout="responsive"
        height={338}
        width={1240}
        priority={true}
        alt={galeriSayfasi.altEtiketi}
      />
      <div className="flex bg-mavimsi md:w-72 w-44 mx-auto md:-mt-12 -mt-9  relative">
        <h1 className="font-[Roboto] font-bold md:text-4xl text-2xl text-beyaz md:py-4 md:px-14 py-2 px-7">
          Fotoğraflar
        </h1>
      </div>

      <div className="masonry md:px-24 md:py-36 py-10 px-8 ">
        {galeris.map((resim) => (
          <div className="rounded-lg overflow-hidden mb-8 " key={resim.id}>
            <Image
              className="rounded-lg transform transition duration-500 hover:scale-125"
              src={resim.image.url}
              width={resim.image.width}
              height={resim.image.height}
              alt={resim.altEtiketi}
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
        galeriSayfasi(where: { id: "ckxt1ba2omdrw0f13h53kow3n" }) {
          image {
            url
          }
          altEtiketi
          metaTitle
          metaDescription
        }
      }
    `,
  });

  const { galeris, galeriSayfasi } = data;
  return {
    props: {
      galeris,
      galeriSayfasi,
    },
  };
};
