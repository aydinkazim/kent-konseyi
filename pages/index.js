import Card from "../components/Card";
import Hero from "../components/Hero";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <Hero />
      {/* <div className="relative">
        <img className="w-full" src="https://placekitten.com/1152/388" alt="" />
        <p className="absolute bottom-10 left-7 right-0 w-2/3 text-beyaz font-[Roboto] md:text-2xl hidden md:block">
          <span className="font-bold">Halil İbrahim Yılmaz</span>, Türkiye
          Cumhuriyetinin Başkenti Ankara’da, toplumun bütün kesimlerini ortak
          akıl ve dayanışma kültürü ile kent için emek verir hale getirme
          hedefiyle çalışmalarına devam ediyor.
        </p>
      </div> */}

      <div className="md:px-24 mx-auto flex flex-wrap ">
        <Card />
        <Card />
        <Card />
      </div>
    </Layout>
  );
}
