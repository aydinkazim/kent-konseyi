import { gql } from "@apollo/client";
import Image from "next/image";
import React from "react";
import client from "../apollo-client";
import Layout from "../components/Layout";
import styles from "./hakkinda.module.css";
import Head from "next/head";

function hakkinda({ hakkinda }) {
  return (
    <Layout>
      <Head>
        <title>{hakkinda.metaTitle}</title>
        <meta name="description" content={hakkinda.metaDescription} />
        <meta property="og:image" content={hakkinda.image.url} />
      </Head>
      <div className="grid md:grid-cols-5 gap-4 md:px-24 px-8 pb-24 pt-11 font-[Roboto]">
        <div className="xl:col-span-2 col-span-5 relative ">
          {/* <img
            src="images/hiy.png"
            alt="Halil İbrahim Yılmaz Ankara Kent Konsryi Başkanı"
          /> */}
          <Image
            className="rounded-xl object-cover"
            src={hakkinda ? hakkinda.image.url : "/images/hiy.png"}
            layout="intrinsic"
            height={620}
            width={448}
            priority={true}
            alt={hakkinda.altEtiketi}
          />
          {/* Çerçeve <div className="absolute border-beyaz rounded-xl border-2  cerceve top-0 left-0 "></div> */}
        </div>
        <div className="xl:col-span-3 col-span-5 z-10">
          <h1 className="text-4xl font-normal mb-7">{hakkinda.title}</h1>
          {/* <p
            dangerouslySetInnerHTML={{ __html: hakkinda.description.html }}
            className="overflow-auto icerik relative"
          /> */}
          <div
            dangerouslySetInnerHTML={{ __html: hakkinda.description.html }}
            className={styles.test}
          ></div>
          <img className="mt-9" src="images/hiy-imza.svg"></img>
        </div>
      </div>
      <svg
        className="absolute top-0 max-w-xs md:max-w-full md:mt-96 mt-72"
        xmlns="http://www.w3.org/2000/svg"
        width="428"
        height="660"
        viewBox="0 0 428 660"
        fill="none"
      >
        <circle
          cx="98"
          cy="330"
          r="330"
          fill="url(#paint0_radial_9_622)"
          fillOpacity={0.5}
        />
        <defs>
          <radialGradient
            id="paint0_radial_9_622"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(98 330) rotate(90) scale(330)"
          >
            <stop stopColor="#522682" />
            <stop offset="1" stopColor="white" stopOpacity={0} />
          </radialGradient>
        </defs>
      </svg>
    </Layout>
  );
}

export default hakkinda;

export const getStaticProps = async (req, res) => {
  const { data } = await client.query({
    query: gql`
      query aboutMe {
        hakkinda(where: { id: "ckxme6528mubx0b60g5ih1gq3" }) {
          id
          title
          image {
            url
          }
          description {
            html
          }
          altEtiketi
          metaTitle
          metaDescription
        }
      }
    `,
  });

  const { hakkinda } = data;
  return {
    props: {
      hakkinda,
    },
  };
};
