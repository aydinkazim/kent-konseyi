import Link from "next/link";

function Footer() {
  return (
    <footer className="footer bg-footer text-beyaz relative pt-1 lg:pt-24 border-b-2 ">
      <div className=" lg:px-24 px-8">
        <div className="sm:flex sm:mt-8">
          <div className="mt-8 sm:mt-0 sm:w-full flex flex-col md:flex-row justify-between">
            <img
              className="absolute w-80 left-20 hidden md:block"
              src="/images/footer-left.svg"
            />
            <div className="flex flex-col ">
              <img
                className="mb-7"
                src="/images/hiy-logo-white.svg"
                alt="Halil İbrahim Yılmaz logo beyaz hali"
              ></img>
              <div className="flex mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="mt-4 mr-3"
                >
                  <path
                    d="M0.932037 3.16019L3.51699 0.57767C3.69933 0.394523 3.91607 0.249209 4.15474 0.150074C4.39341 0.0509392 4.64932 -6.19408e-05 4.90777 5.64551e-08C5.43446 5.64551e-08 5.92961 0.206311 6.30097 0.57767L9.08252 3.35922C9.26567 3.54157 9.41098 3.7583 9.51012 3.99698C9.60925 4.23565 9.66025 4.49156 9.66019 4.75C9.66019 5.2767 9.45388 5.77184 9.08252 6.1432L7.04854 8.17718C7.52465 9.2266 8.18659 10.1813 9.00243 10.9951C9.81621 11.813 10.7708 12.4773 11.8204 12.9563L13.8544 10.9223C14.0367 10.7392 14.2534 10.5939 14.4921 10.4947C14.7308 10.3956 14.9867 10.3446 15.2451 10.3447C15.7718 10.3447 16.267 10.551 16.6383 10.9223L19.4223 13.7015C19.6057 13.8841 19.7511 14.1013 19.8503 14.3404C19.9494 14.5795 20.0003 14.8358 20 15.0947C20 15.6214 19.7937 16.1165 19.4223 16.4879L16.8422 19.068C16.25 19.6626 15.432 20 14.5922 20C14.415 20 14.2451 19.9854 14.0777 19.9563C10.8058 19.4175 7.56068 17.6772 4.94174 15.0607C2.32524 12.4466 0.587376 9.20388 0.0412598 5.92233C-0.123789 4.9199 0.208736 3.88835 0.932037 3.16019Z"
                    fill="#752180"
                  />
                </svg>
                <span className="my-2 flex flex-col">
                  <a
                    href="tel:+906785673466"
                    className="text-blue-700  text-md hover:text-blue-500"
                  >
                    +90 678 567 34 66
                  </a>
                  <a
                    href="tel:+903126678990"
                    className="text-blue-700  text-md hover:text-blue-500"
                  >
                    +90 312 667 89 90
                  </a>
                </span>
              </div>
              <div className="flex mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="16"
                  viewBox="0 0 20 16"
                  fill="none"
                  className="mt-3 mr-3"
                >
                  <path
                    d="M19.2857 0H0.714286C0.319196 0 0 0.315972 0 0.707071V14.8485C0 15.2396 0.319196 15.5556 0.714286 15.5556H19.2857C19.6808 15.5556 20 15.2396 20 14.8485V0.707071C20 0.315972 19.6808 0 19.2857 0ZM17.4821 2.40625L10.4397 7.83081C10.2656 7.96559 10.0223 7.96559 9.84822 7.83081L2.80357 2.40625C2.77702 2.38596 2.75754 2.35796 2.74787 2.32616C2.7382 2.29437 2.73882 2.26037 2.74965 2.22894C2.76048 2.19752 2.78097 2.17023 2.80825 2.15091C2.83554 2.13159 2.86824 2.12121 2.90179 2.12121H17.3839C17.4175 2.12121 17.4502 2.13159 17.4775 2.15091C17.5047 2.17023 17.5252 2.19752 17.5361 2.22894C17.5469 2.26037 17.5475 2.29437 17.5378 2.32616C17.5282 2.35796 17.5087 2.38596 17.4821 2.40625Z"
                    fill="#752180"
                  />
                </svg>
                <span className="my-2 ">
                  <a
                    href="mailto:info@ankakent.com"
                    className="text-blue-700  text-md hover:text-blue-500"
                  >
                    info@ankakent.com
                  </a>
                </span>
              </div>
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="25"
                  viewBox="0 0 20 25"
                  fill="none"
                  className="mt-4 mr-3"
                >
                  <path
                    d="M10 7.14188C9.19624 7.14188 8.44086 7.46051 7.87097 8.04285C7.59092 8.32819 7.36885 8.6673 7.21753 9.04066C7.06622 9.41402 6.98863 9.81426 6.98925 10.2184C6.98925 11.0397 7.30376 11.8116 7.87097 12.3939C8.15021 12.6801 8.48207 12.907 8.84745 13.0616C9.21283 13.2162 9.60452 13.2955 10 13.2949C10.8038 13.2949 11.5591 12.9735 12.129 12.3939C12.6989 11.8116 13.0108 11.0397 13.0108 10.2184C13.0108 9.39706 12.6989 8.62519 12.129 8.04285C11.5591 7.46051 10.8038 7.14188 10 7.14188ZM19.2097 6.10081C18.7036 4.90834 17.9739 3.82865 17.0618 2.92268C16.1468 2.00851 15.068 1.28295 13.8844 0.785606C12.6532 0.2637 11.3468 0 10 0C8.65323 0 7.34677 0.2637 6.11559 0.782859C4.92473 1.28554 3.85753 2.00522 2.93817 2.91993C2.02667 3.82641 1.29708 4.90597 0.790322 6.09806C0.266129 7.33416 0 8.64716 0 9.99863C0 11.9379 0.454301 13.869 1.34677 15.7314C2.06452 17.2284 3.0672 18.687 4.33065 20.0742C6.48925 22.442 8.75269 23.8896 9.39516 24.2769C9.57753 24.3869 9.78552 24.4448 9.99731 24.4444C10.207 24.4444 10.414 24.3895 10.5995 24.2769C11.2419 23.8896 13.5054 22.442 15.664 20.0742C16.9274 18.6897 17.9301 17.2284 18.6479 15.7314C19.5457 13.8717 20 11.9434 20 10.0014C20 8.64991 19.7339 7.3369 19.2097 6.10081ZM10 15.0529C7.3871 15.0529 5.26882 12.8883 5.26882 10.2184C5.26882 7.54841 7.3871 5.38388 10 5.38388C12.6129 5.38388 14.7312 7.54841 14.7312 10.2184C14.7312 12.8883 12.6129 15.0529 10 15.0529Z"
                    fill="#752180"
                  />
                </svg>
                <span className="my-2 " style={{ maxWidth: "250px" }}>
                  <a
                    href="#harita"
                    className="text-blue-700  text-md hover:text-blue-500"
                  >
                    Lorem İpsum Dolar Sit Amet No:4 Çankaya / Ankara
                  </a>
                </span>
              </div>
            </div>
            <div className="flex flex-col font-['Helvetica']">
              <span className="my-2">
                <Link href="/hakkinda">
                  <a className="font-bold text-lg">Hakkımda</a>
                </Link>
              </span>
              <span className="my-2.5">
                <Link href="/blog">
                  <a className="font-bold text-lg">Blog</a>
                </Link>
              </span>
              <span className="my-2.5">
                <Link href="/haberler">
                  <a className="font-bold text-lg">Haberler</a>
                </Link>
              </span>
              <span className="my-2.5">
                <Link href="/galeri">
                  <a className="font-bold text-lg">Galeri</a>
                </Link>
              </span>
              <span className="my-2.5">
                <Link href="/galeri">
                  <a className="">Fotoğraflar</a>
                </Link>
              </span>
              <span className="my-2.5">
                <Link href="/galeri">
                  <a className="">Haber Küpürler</a>
                </Link>
              </span>
              <span className="my-2.5">
                <Link href="/galeri">
                  <a className="">Videolar</a>
                </Link>
              </span>
            </div>
            <div className="flex flex-col space-y-8 ">
              <span className="mt-2 -my-2">
                <Link href="/hakkimda">
                  <a className="font-bold text-lg">Latest Post</a>
                </Link>
              </span>
              <img
                className="absolute w-56 top-14 right-28 hidden md:block "
                src="/images/footer-right.svg"
              />
              <div className="flex space-x-4">
                <img
                  className="rounded-xl w-full"
                  style={{ width: "100px", height: "100px" }}
                  src="https://placekitten.com/400/400"
                  alt=""
                />
                <div className="flex flex-col">
                  <p className="md:w-64 mb-4 relative">
                    Integer molestie scelerisque et vel lorem sed proin id
                    varius
                  </p>
                  <div>7 Kasım, 2021</div>
                </div>
              </div>
              <div className="flex space-x-4">
                <img
                  className="rounded-xl w-full"
                  style={{ width: "100px", height: "100px" }}
                  src="https://placekitten.com/100/100"
                  alt=""
                />
                <div className="flex flex-col">
                  <p className="md:w-64 mb-4 relative">
                    Integer molestie scelerisque et vel lorem sed proin id
                    varius
                  </p>
                  <div>19 Ekim, 2021</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" lg:px-24 px-8">
        <div className="mt-16 border-t-2  flex flex-col ">
          <div className="py-8">
            <div className="flex justify-between flex-wrap ">
              <p className="text-sm  font-normal mb-2">
                Halil İbrahim YILMAZ Resmi Web Sitesi. © 2021
              </p>
              <div className="flex  md:space-x-20 ">
                <Link href="twitter.com">
                  <img src="/images/twitter.png" alt="twitter ikonu" />
                </Link>
                <Link href="twitter.com">
                  <img src="/images/facebook.png" alt="facebook ikonu" />
                </Link>
                <Link href="twitter.com">
                  <img src="/images/instagram.png" alt="instagram ikonu" />
                </Link>
                <Link href="twitter.com">
                  <img src="/images/youtube.png" alt="youtube ikonu" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
