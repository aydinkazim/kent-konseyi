import React from "react";
import Layout from "../components/Layout";

let images = [
  {
    img: "https://placekitten.com/400/402",
  },
  {
    img: "https://placekitten.com/600/300",
  },
  {
    img: "https://placekitten.com/500/450",
  },
  {
    img: "https://placekitten.com/300/500",
  },
  {
    img: "https://placekitten.com/500/600",
  },
  {
    img: "https://placekitten.com/550/600",
  },
  {
    img: "https://placekitten.com/600/800",
  },
  {
    img: "https://placekitten.com/1000/700",
  },
  {
    img: "https://placekitten.com/1000/400",
  },
];

function galeri() {
  return (
    <Layout>
      <img
        src="images/galeri-header.png"
        className="w-full object-contain pt-11 md:max-h-80"
      ></img>
      <div className="flex bg-mavimsi md:w-72 w-44 mx-auto md:-mt-12 -mt-9  relative">
        <span className="font-[Roboto] font-bold md:text-4xl text-2xl text-beyaz md:py-4 md:px-14 py-2 px-7">
          Fotoğraflar
        </span>
      </div>

      <div className="masonry md:px-24 md:py-36 py-10 px-8">
        {images.map((item) => (
          <div className="rounded-lg overflow-hidden mb-8" key={item.img}>
            <img src={item.img} className="w-full" />
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default galeri;
