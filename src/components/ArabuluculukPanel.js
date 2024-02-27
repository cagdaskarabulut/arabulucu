import React, { useEffect, useState } from "react";
import Image from "next/image";
import MyGrid from "./tools/MyGrid";
import MyBreadcrumbs from "./tools/MyBreadcrumbs";

export default function ArabuluculukPanel() {

  useEffect(() => {
    fetch("/api/auth/whoAmI/email")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log(process.env.NEXT_PUBLIC_ADMIN_USER);
      });
  }, []);

  const LeftContent = () => {
    return (
      <>
        <Image
          // src="/images/Arabulucu.jpg"
          src="https://karabulut-storage.s3.amazonaws.com/arabulucu/Arabulucu.jpg"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }} // optional
          alt="Arabuluculuk"
        />
      </>
    );
  };

  const RightContent = () => {
    return (
      <>
        <p style={{ marginTop: "0px", textAlign: "justify" }}>
          Arabuluculuk, üçüncü kişinin tarafları bir araya getirerek müzakere
          edebilmelerini sağladığı ve aralarındaki iletişimi kolaylaştırdığı,
          çözüme ilişkin karar verme yetkisinin taraflarda kaldığı, sürece
          ilişkin tavsiye veya karar verme yetkisinin ise üçüncü kişide olduğu
          bir yapılandırılmış uyuşmazlık çözüm sürecidir. Arabuluculuk için en
          az iki tarafa ihtiyaç vardır; sürecin arabuluculuk olarak
          tanımlanabilmesi için ise bir üçüncü kişinin müdahalesi gereklidir.
          Kanun, arabuluculuğu{" "}
          <i>
            “sistematik yöntemler uygulayarak, görüşmek ve müzakerelerde
            bulunmak amacıyla tarafları bir araya getiren, onların birbirini
            anlamaları ve bu suretle çözümlerini kendilerinin üretmesini
            sağlamak için aralarında iletişim sürecinin kurulmasını
            gerçekleştirilen, uzmanlık eğitimi almış olan tarafsız ve bağımsız
            bir üçüncü kişinin katılımıyla ve ihtiyari olarak yürütülen
            uyuşmazlık çözüm yöntemi”
          </i>{" "}
          olarak tanımlanmaktadır.
        </p>
        <p style={{ marginTop: "0px", textAlign: "justify" }}>
          Arabuluculuk, elverişli her uyuşmazlık için kullanılabilecek bir
          uyuşmazlık çözüm yöntemidir. Özellikle taraflar arasında birden fazla
          uyuşmazlık konusu varsa, görünen uyuşmazlığın ardında bambaşka bir
          sorun varsa, tarafların uyuşmazlık konusundan başkaca da ilişkileri
          varsa; hızlı, ekonomik, gizli, kalıcı, dostane bir çözüm isteniyorsa
          arabuluculuk taraflar için en ideal yoldur denilirse yanlış ifade
          edilmiş olmaz.
        </p>
        <p style={{ marginTop: "0px", textAlign: "justify" }}>
          Yukarıda da değinildiği üzere arabuluculuğun olumlu yanları olarak ise
          tarafların menfaatine ve ihtiyacına odaklı olması, hızlı ve ekonomik
          olması, kontrolün taraflarda olması, gizli olması ve en nihayetinde
          yargılama yükünü azaltıyor olması sayılmaktadır.
        </p>
      </>
    );
  };

  return (
    <div>
      <MyGrid
        breadcrumbs={
          <MyBreadcrumbs
            link1Title="Arabuluculuk"
            link1Href="/"
            activePageNumber="1"
          />
        }
        title="Arabuluculuk nedir?"
        leftContent={<LeftContent />}
        rightContent={<RightContent />}
      />
    </div>
  );
}
