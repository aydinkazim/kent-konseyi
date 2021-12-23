import Link from "next/link";
import React from "react";

export default function Card() {
  return (
    <div className="max-w-lg mx-auto z-10">
      <Link href="#">
        <div className="bg-beyaz  rounded-xl max-w-xs">
          <div>
            <img
              className="rounded-t-lg w-full"
              src="https://placekitten.com/300/242"
              alt=""
            />
          </div>

          <div className="relative px-5 pt-10 py-5 text-lg">
            <p
              style={{ maxWidth: "248px" }}
              className="font-normal text-gray-700 mb-3 "
            >
              ATO, “Aktar Ulusal Yeterlilik Hazırlama Çalıştayı” ile mesleğin
              ...
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
              <span className="ml-3">22 Eylül 2021</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
