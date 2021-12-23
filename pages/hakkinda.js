import Image from "next/image";
import React from "react";
import Layout from "../components/Layout";

function hakkinda() {
  return (
    <Layout>
      <div className="grid md:grid-cols-5 gap-4 md:px-24 px-8 pb-24 pt-11 font-[Roboto]">
        <div className="xl:col-span-2 col-span-5 relative ">
          {/* <img
            src="images/hiy.png"
            alt="Halil İbrahim Yılmaz Ankara Kent Konsryi Başkanı"
          /> */}
          <Image
            className="rounded-xl "
            src="/images/hiy.png"
            layout="intrinsic"
            height={620}
            width={448}
            priority={true}
          />
          {/* Çerçeve <div className="absolute border-beyaz rounded-xl border-2  cerceve top-0 left-0 "></div> */}
        </div>
        <div className="xl:col-span-3 col-span-5 z-10">
          <h1 className="text-4xl font-normal mb-7">
            Halil İbrahim Yılmaz Kimdir?
          </h1>
          <p className="overflow-auto icerik relative">
            Halil İbrahim Yılmaz 1975 yılında Rize’nin Kendirli kasabasında
            doğdu. İlkokul, ortaokul ve lise eğitimini Rize’de tamamlayan
            Yılmaz, 1998 yılında yükseköğretimini Sivas Cumhuriyet Üniversitesi
            İktisadi İdari Bilimler Fakültesi İşletme Bölümü’nde alarak mezun
            oldu ve ardından 2001 yılında Konya Selçuk Üniversitesi İnsan
            Kaynakları Yüksek Lisans Programı’na devam etti. Öğrencilik
            yıllarından itibaren sivil toplum örgütlerinde faaliyet gösteren
            Yılmaz, birçok yayın organında yöneticilikle birlikte gençlik
            yapılanmalarında da başkanlık görevi üstlendi. 1998-2000 yıllarında
            Üniversiteli Öğrenciler Birliği’nde Genel Başkanlık yapan Yılmaz,
            2001 yılında gençlerin siyasi ve toplumsal alana katılımlarını
            artırma amacıyla farklı görüş ve düşüncelerin birleştiği Genç
            Türkiye Atılım Projesi’ni koordine etti. Dezavantajlı grupların
            yaşamlarını kolaylaştırmayı hedefleyen Selçuklu Vakfı Kurucular
            Kurulu Üyeliğine 2007’den beri devam etmekte olan Yılmaz, 2009-2013
            yılları arasında genç girişimcileri destekleme amacıyla oluşturulan
            TOBB Genç Girişimciler Ankara İl İcra Kurulu Kurucu Üyesi olarak yer
            aldı. Ulusal ve uluslararası alanda etkili olan İnternet Medya ve
            Bilişim Federasyonu’nun 2016 yılından itibaren Danışma Kurulu Üyesi
            olan Yılmaz, 2018’de faaliyete geçerek kent gelişimiyle ilgili
            çalışmalar yürüten Şehir ve Çevre Derneği’nin de kurucularındandır.
            Yılmaz, 2018’den beri TOBB temsilcisi olarak İstanbul Formula A.Ş.
            Yönetim Kurulu Başkan Vekilliği yapmaktadır. Yılmaz, eğitimle aktif
            istihdamın gelişimine katkı sağlayarak mesleki yeterlilikle
            sürdürülebilir belgelendirme hizmeti sunan ATO İnovasyon Danışmanlık
            Eğitim Araştırma A.Ş’nin 2018 yılından beri Başkan Vekilidir.
            Türkiye ekonomisinin ticaret, bilgi ve iş ahlakı etkileşimiyle
            kalkınma ve dönüşümünün sağlanmasında köprü oluşturan, Türkiye’nin
            en büyük ikinci odası olan Ankara Ticaret Odası’nda iki dönem Meclis
            Üyeliği yapan Yılmaz, 2018 yılı seçimleri sonucunda başlayan Yönetim
            Kurulu Başkan Vekilliği görevini sürdürmektedir. 29 Haziran 2019’da
            234 delegenin katıldığı Ankara Kent Konseyi seçiminde Halil İbrahim
            Yılmaz 233 oy alarak Ankara Kent Konseyi Yürütme Kurulu Başkanı
            seçildi. Yılmaz, 500’den fazla kamu, üniversite ve sivil toplum
            kuruluşu temsilcisinin bileşenleri arasında olduğu Türkiye’nin en
            çok katılımlı Kent Konseyinin oluşturulmasına öncülük etti. Yılmaz,
            yine aynı yıldan itibaren Türkiye Kent Konseyleri Birliği Yönetim
            Kurulu Üyesi olarak görev almaya başladı. Halil İbrahim Yılmaz,
            Türkiye Cumhuriyetinin Başkenti Ankara’da, toplumun bütün
            kesimlerini ortak akıl ve dayanışma kültürü ile kent için emek verir
            hale getirme hedefiyle çalışmalarına devam ediyor. Halil İbrahim
            Yılmaz evli ve 3 çocuk babasıdır. Halil İbrahim Yılmaz was born in
            1975 in Rize, Turkey. He currently assumes the duties of Chairman of
            Ankara Citizen’s Assembly, Vice President of Ankara Chamber of
            Commerce, Consultant at Ankara Metropolitan Municipality, Vice
            President of İstanbul Formula Inc., Board Member at Union of
            Citizen’s Assemblies of Turkey and Vice President of Ankara Chamber
            of Commerce Innovation Consultancy Training Research Inc. Company.
            Mr. Yılmaz is married with three children. Education Completing his
            primary and secondary education in Rize, Mr. Yılmaz graduated in
            1998 from Sivas Cumhuriyet University Economics and Administrative
            Sciences Faculty with a bachelor’s degree in Business
            Administration. Afterwards, he went on to Konya Selçuk University
            where he graduated with a master’s degree in Human Resources.
            Participation in Civil Society An active part of the civil society
            since his student years, Mr. Yılmaz took part in several media
            institutions as well as youth organizations, assuming various
            management duties. Having acted as the Director General of
            University Students Association between 1998-2000, Mr. Yılmaz
            coordinated the Young Turkey Advancement Project in 2001 which
            gathered together different thoughts and ideas in a platform that
            aimed to increase young people’s participation in political and
            civil areas. Mr. Yılmaz also took part as a Founding Member in
            Ankara Province Executive Board during the years 2009-2013 in the
            Union of Chambers and Commodity Exchanges of Turkey Young
            Entrepreneurs Board which was constituted to support young
            entrepreneurs. Ankara Chamber of Commerce Established in 1923 and
            currently representing over 160.000 member companies, acting as a
            catalyst in terms of the interaction of information and work ethic
            to create development; Ankara Chamber of Commerce is the second
            biggest chamber in Turkey, wherein Mr. Yılmaz served as a Member of
            Assembly for two consecutive terms and still assumes the duties of
            Vice President of the Board of Directors, a post to which he was
            elected in 2018. Ankara Citizen’s Assembly At the Ankara Citizen’s
            Assembly elections held on June 29th, 2019 with the participation of
            234 delegates, Halil İbrahim Yılmaz was elected as the Chairman of
            Ankara Citizen’s Assembly Executive Board. Simultaneously, Mr.
            Yılmaz started his duties as a Board Member at the Union of
            Citizen’s Assemblies of Turkey. At the Ankara Citizen’s Assembly
            General Assembly held on July 10th, 2021 with a record breaking
            participation, Mr. Yılmaz got 1247 votes out of 1253 delegates and
            was re-elected as the Chairman of Ankara Citizen’s Assembly. With
            open doors to anyone who wants to participate and have a say in the
            administration of the city; Ankara Citizens’ Assembly is now a large
            body that constitutes of 1325 representatives from institutions and
            civil society organizations. Within the Assembly; 4 assemblies and
            30 different working groups were established, including Turkey’s
            first Bicycle Assembly, which aims to expand pedestrianization in
            the city and reduce carbon emissions, and the Climate and
            Environment Assembly, aiming to prevent and about the problems
            experienced due to climate change, which is increasing in the world.
            With these structures, the Assembly continues its work with over
            5000 volunteer components who want to contribute to the
            transformation of the city they live in to a livable future. Among
            these work there are; more than 10 “Respect for Water Meetings” with
            academics and climate activists to combat water scarcity in our
            country, On World Environment Day, Ancestry Seed Movement to use
            genetically unmodified ancestral seeds that don’t need wild
            irrigation, with the “Let’s Do It” movement on World Cleanup Day,
            tons of garbage collected in different parts of the city with the
            ambassadors in Ankara, “Climate Crisis-Related Natural Disasters and
            Forest Fires Meetings” to seek solutions to the increasing forest
            fires all over the world.
          </p>
          <img className="mt-9" src="images/hiy-imza.svg"></img>
        </div>
      </div>
      <svg
        className="absolute top-0 max-w-xs md:max-w-full md:mt-96 mt-72"
        xmlns="http://www.w3.org/2000/svg"
        width="428"
        height="660"
        viewBox="0 0 428 660"
        fill="none"
      >
        <circle
          cx="98"
          cy="330"
          r="330"
          fill="url(#paint0_radial_9_622)"
          fillOpacity={0.5}
        />
        <defs>
          <radialGradient
            id="paint0_radial_9_622"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(98 330) rotate(90) scale(330)"
          >
            <stop stopColor="#522682" />
            <stop offset="1" stopColor="white" stopOpacity={0} />
          </radialGradient>
        </defs>
      </svg>
    </Layout>
  );
}

export default hakkinda;
