import Card from "../components/Card";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import { Tab } from "@headlessui/react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import client from "../apollo-client";
import { gql } from "@apollo/client";
import { TwitterTimelineEmbed } from "react-twitter-embed";

export default function Home({ posts, video }) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <Layout>
      <Hero />
      <img
        className=" md:-mt-96 md:-mb-12 -mt-16 w-full"
        src="images/hero-bottom.png"
        alt=""
      />
      <div className="relative image-overlay">
        <img
          style={{ height: "600px" }}
          className="md:h-96 object-cover w-full opacity-40"
          src={video.videoResim.url}
          alt=""
        />
        <p className="absolute md:bottom-10 bottom-5 left-7 right-0 md:w-2/3 text-beyaz font-[Roboto] md:text-2xl text-xl ">
          {/* <span className="font-bold">Halil İbrahim Yılmaz</span>, Türkiye
          Cumhuriyetinin Başkenti Ankara’da, toplumun bütün kesimlerini ortak
          akıl ve dayanışma kültürü ile kent için emek verir hale getirme
          hedefiyle çalışmalarına devam ediyor. */}
          {video.aciklama}
        </p>
        <img
          onClick={openModal}
          className="absolute md:right-24 top-1/2  right-5 md:w-24 w-11 hover:cursor-pointer"
          src="/images/play-icon.png"
        />
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-10 overflow-y-auto"
            onClose={closeModal}
          >
            <div className="min-h-screen px-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0" />
              </Transition.Child>

              {/* This element is to trick the browser into centering the modal contents. */}
              <span
                className="inline-block h-screen align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="inline-block w-full p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <Dialog.Title
                    as="div"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    <div className="mt-4 text-right">
                      <button
                        type="button"
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-beyaz hover:text-koyuMor bg-koyuMor border border-seffaf rounded-md hover:bg-beyaz focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-koyuMor"
                        onClick={closeModal}
                      >
                        Kapat
                      </button>
                    </div>
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-koyuMor">
                      <iframe
                        className="w-full youtube"
                        height={500}
                        src="https://www.youtube.com/embed/F5tSoaJ93ac"
                        src={`https://www.youtube.com/embed/${video.youtubeUrl}`}
                        title="YouTube video player"
                        frameBorder={0}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </p>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      </div>

      <div className="pt-44 pb-28 relative">
        <img
          className="absolute md:left-20 md:top-auto top-60"
          src="images/haberler-left.svg"
        />
        <div className="pb-12 mx-auto text-center text-4xl font-medium font-[Roboto]">
          Haberler
        </div>
        <div className="md:px-24 flex flex-wrap md:justify-between justify-center max-w-7xl mx-auto">
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
        <img
          className="absolute right-0 md:top-1/2 bottom-40"
          src="images/haberler-right.svg"
        />
      </div>

      <div className="pt-28 pb-60 relative">
        <div className="pb-12 mx-auto text-center text-4xl font-medium font-[Roboto]">
          Sosyal Medya
        </div>
        <div className="flex justify-center max-w-7xl mx-auto space-x-20">
          <a
            target={"_blank"}
            href="https://twitter.com/halilibrahimy_"
            className="animate-bounce"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="#1DA1F2"
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" />
            </svg>
          </a>
          <a
            target={"_blank"}
            href="https://www.facebook.com/halilbirahimy"
            className="animate-bounce"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="#4267B2"
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
            </svg>
          </a>
          <a
            target={"_blank"}
            href="https://www.youtube.com/channel/UCf_-6wTzRA-trW56hNffKaQ/videos"
            className="motion-safe:animate-bounce"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="58"
              height="40"
              viewBox="0 0 24 24"
              fill="#FF0000"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
            </svg>
          </a>
        </div>
        <div className="h-72 bg-footer mt-40">
          <div className="absolute w-full md:-mt-14 text-center">
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="halilibrahimy_"
              options={{ height: 400, width: 500 }}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps = async (req, res) => {
  const { data } = await client.query({
    query: gql`
      query AllPostQuery {
        posts(first: 3, orderBy: date_DESC) {
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
        video(where: { id: "ckxnjjhko0dse0b05heyaixap" }) {
          id
          aciklama
          videoResim {
            url
          }
          youtubeUrl
        }
      }
    `,
  });

  const { posts, video } = data;

  return {
    props: {
      posts,
      video,
    },
  };
};
