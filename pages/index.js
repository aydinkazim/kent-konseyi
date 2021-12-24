import Card from "../components/Card";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import { Tab } from "@headlessui/react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function Home() {
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
      <div className="relative ">
        <img className="w-full" src="https://placekitten.com/1152/388" alt="" />
        <p className="absolute md:bottom-10 bottom-0 left-7 right-0 md:w-2/3 text-beyaz font-[Roboto] md:text-2xl ">
          <span className="font-bold">Halil İbrahim Yılmaz</span>, Türkiye
          Cumhuriyetinin Başkenti Ankara’da, toplumun bütün kesimlerini ortak
          akıl ve dayanışma kültürü ile kent için emek verir hale getirme
          hedefiyle çalışmalarına devam ediyor.
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
        <div className="md:px-24 flex flex-wrap">
          <Card />
          <Card />
          <Card />
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
        <div className="text-center">
          <Tab.Group>
            <Tab.List>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={
                      selected ? "bg-koyuMor text-beyaz mr-20" : "mr-20"
                    }
                  >
                    <img src="images/twitter.png"></img>
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={
                      selected ? "bg-koyuMor text-beyaz mr-20" : "mr-20"
                    }
                  >
                    <img src="images/facebook.png"></img>
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button className={selected ? "bg-koyuMor text-beyaz " : ""}>
                    <img src="images/youtube.png"></img>
                  </button>
                )}
              </Tab>
              {/* ...  */}
            </Tab.List>
            <div></div>
            <Tab.Panels>
              <Tab.Panel>Twitter</Tab.Panel>
              <Tab.Panel>Facebook</Tab.Panel>
              <Tab.Panel>Youtube</Tab.Panel>
              {/* ... */}
            </Tab.Panels>
          </Tab.Group>
        </div>
        <div className="h-72 bg-footer mt-40">
          <img
            className="absolute m-auto left-0 right-0 md:-mt-14"
            src="https://placekitten.com/494/423"
            alt=""
          />
        </div>
      </div>
    </Layout>
  );
}
