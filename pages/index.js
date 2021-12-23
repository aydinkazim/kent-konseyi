import Card from "../components/Card";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import { Tab } from "@headlessui/react";
import { Fragment } from "react/cjs/react.production.min";

export default function Home() {
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
          className="absolute md:right-24 top-1/2  right-5 md:w-24 w-11"
          src="/images/play-icon.png"
        />
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
