import Link from "next/link";
import React from "react";

function Topbar() {
  return (
    <div className="hidden md:block">
      <div className="border-b-2 border-acikGri flex lg:h-12 p-3 lg:px-24 px-8">
        <div className="flex justify-between flex-wrap items-center w-full">
          <div className="flex flex-wrap lg:space-x-8">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="25"
                viewBox="0 0 20 25"
                fill="none"
              >
                <path
                  d="M10 7.14188C9.19624 7.14188 8.44086 7.46051 7.87097 8.04285C7.59092 8.32819 7.36885 8.6673 7.21753 9.04066C7.06622 9.41402 6.98863 9.81426 6.98925 10.2184C6.98925 11.0397 7.30376 11.8116 7.87097 12.3939C8.15021 12.6801 8.48207 12.907 8.84745 13.0616C9.21283 13.2162 9.60452 13.2955 10 13.2949C10.8038 13.2949 11.5591 12.9735 12.129 12.3939C12.6989 11.8116 13.0108 11.0397 13.0108 10.2184C13.0108 9.39706 12.6989 8.62519 12.129 8.04285C11.5591 7.46051 10.8038 7.14188 10 7.14188ZM19.2097 6.10081C18.7036 4.90834 17.9739 3.82865 17.0618 2.92268C16.1468 2.00851 15.068 1.28295 13.8844 0.785606C12.6532 0.2637 11.3468 0 10 0C8.65323 0 7.34677 0.2637 6.11559 0.782859C4.92473 1.28554 3.85753 2.00522 2.93817 2.91993C2.02667 3.82641 1.29708 4.90597 0.790322 6.09806C0.266129 7.33416 0 8.64716 0 9.99863C0 11.9379 0.454301 13.869 1.34677 15.7314C2.06452 17.2284 3.0672 18.687 4.33065 20.0742C6.48925 22.442 8.75269 23.8896 9.39516 24.2769C9.57753 24.3869 9.78552 24.4448 9.99731 24.4444C10.207 24.4444 10.414 24.3895 10.5995 24.2769C11.2419 23.8896 13.5054 22.442 15.664 20.0742C16.9274 18.6897 17.9301 17.2284 18.6479 15.7314C19.5457 13.8717 20 11.9434 20 10.0014C20 8.64991 19.7339 7.3369 19.2097 6.10081ZM10 15.0529C7.3871 15.0529 5.26882 12.8883 5.26882 10.2184C5.26882 7.54841 7.3871 5.38388 10 5.38388C12.6129 5.38388 14.7312 7.54841 14.7312 10.2184C14.7312 12.8883 12.6129 15.0529 10 15.0529Z"
                  fill="#752180"
                />
              </svg>
              <span className="">
                <a
                  href="#harita"
                  className="pl-3 text-acikGri text-sm hover:text-koyuMor"
                >
                  Lorem İpsum Dolar Sit Amet No:4 Çankaya / Ankara
                </a>
              </span>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="none"
              >
                <path
                  d="M19.2857 0H0.714286C0.319196 0 0 0.315972 0 0.707071V14.8485C0 15.2396 0.319196 15.5556 0.714286 15.5556H19.2857C19.6808 15.5556 20 15.2396 20 14.8485V0.707071C20 0.315972 19.6808 0 19.2857 0ZM17.4821 2.40625L10.4397 7.83081C10.2656 7.96559 10.0223 7.96559 9.84822 7.83081L2.80357 2.40625C2.77702 2.38596 2.75754 2.35796 2.74787 2.32616C2.7382 2.29437 2.73882 2.26037 2.74965 2.22894C2.76048 2.19752 2.78097 2.17023 2.80825 2.15091C2.83554 2.13159 2.86824 2.12121 2.90179 2.12121H17.3839C17.4175 2.12121 17.4502 2.13159 17.4775 2.15091C17.5047 2.17023 17.5252 2.19752 17.5361 2.22894C17.5469 2.26037 17.5475 2.29437 17.5378 2.32616C17.5282 2.35796 17.5087 2.38596 17.4821 2.40625Z"
                  fill="#752180"
                />
              </svg>
              <span className="">
                <a
                  href="mailto:info@ankakent.com"
                  className="pl-4 text-acikGri text-sm hover:text-koyuMor"
                >
                  info@ankakent.com
                </a>
              </span>
            </div>
          </div>
          <div className="flex md:space-x-8">
            <Link href="twitter.com">
              <img src="/images/twitter-dark.png" alt="twitter ikonu" />
            </Link>
            <Link href="twitter.com">
              <img src="/images/facebook-dark.png" alt="facebook ikonu" />
            </Link>
            <Link href="twitter.com">
              <img src="/images/instagram-dark.png" alt="instagram ikonu" />
            </Link>
            <Link href="twitter.com">
              <img src="/images/youtube-dark.png" alt="youtube ikonu" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
