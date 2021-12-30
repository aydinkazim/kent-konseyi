import Image from "next/image";
import Link from "next/link";
import React from "react";
import dayjs from "dayjs";
import "dayjs/locale/tr";

export default function Card({ image, imageAltText, description, date, slug }) {
  const tarih = dayjs(date).locale("tr").format("DD MMMM YYYY");

  return (
    <div className="z-10 hover:cursor-pointer pb-5 transform transition duration-500 hover:scale-105">
      <Link href={`haberler/${slug}`}>
        <div className="bg-beyaz rounded-xl max-w-300">
          <div>
            {/* <img
              className="rounded-t-lg "
              src={image ? image : "https://placekitten.com/300/242"}
              alt=""
            /> */}
            <Image
              className="rounded-t-lg object-cover transform transition duration-500 hover:scale-105"
              src={image ? image : "https://placekitten.com/300/242"}
              width={300}
              height={242}
              alt={imageAltText}
            />
          </div>

          <div className="relative px-5 pt-10 pb-14 text-lg max-h-40">
            <p
              style={{ maxWidth: "248px" }}
              className="font-normal overflow-hidden l-21 h-87"
            >
              {description
                ? description
                : "ATO, “Aktar Ulusal Yeterlilik Hazırlama Çalıştayı” ile mesleğin..."}
            </p>

            <div className="-top-6 absolute  text-beyaz bg-acikMor  font-medium px-3 py-2 text-center inline-flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="ml-3">{tarih ? tarih : "22 Eylül 021"}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
