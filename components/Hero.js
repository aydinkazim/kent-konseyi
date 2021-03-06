import React from "react";

export default function Hero() {
  return (
    <>
      <article className="flex flex-wrap relative">
        <div className="flex flex-col md:w-1/2 pt-5 md:pt-44 px-5 md:px-24 ">
          <h1 className="text-koyuMor md:text-2xl font-bold font-['Helvetica'] pb-4">
            Ankara Kent Konseyi Başkanı
          </h1>
          <h2 className="font-['Roboto'] md:text-5xl pb-4 ">
            <span className="font-bold">Bizimle Birlikte</span> Daha İyi
            Hissedin ve Gelişin
          </h2>
          <p className="text-koyuGri ">
            Halil İbrahim Yılmaz, Türkiye Cumhuriyetinin Başkenti Ankara’da,
            toplumun bütün kesimlerini ortak akıl ve dayanışma kültürü ile kent
            için emek verir hale getirme hedefiyle çalışmalarına devam ediyor.
          </p>
        </div>
        <div className="flex md:w-1/2 justify-end">
          <img
            src="/images/hero.png"
            className="object-contain"
            alt="Gri takım elbise ve gülümseyerek sunum yapan Ankara Kent Konseyi Başkanı Halil İbrahim Yılmaz"
          ></img>
        </div>
      </article>
    </>
  );
}
