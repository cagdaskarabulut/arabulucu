import React, { useEffect, useState } from "react";
import Image from "next/image";
import MyGrid from "./tools/MyGrid";
import MyBreadcrumbs from "./tools/MyBreadcrumbs";
import styles from "./ArabulucuPanel.module.scss";

export default function ArabulucuPanel() {
  

  const LeftContent = () => {
    return (
      <div className={styles.profileImageContainer}>
        <Image
        className={styles.profileImage}
          // src="/images/Avukat Arabulucu Öznur İlhan Karabulut.png"
          src="https://karabulut-storage.s3.amazonaws.com/arabulucu/Avukat+Arabulucu+O%CC%88znur+I%CC%87lhan+Karabulut.png"
          width={0}
          height={0}
          sizes="100vw"
          // style={{ }} // optional
          alt="Arabuluculuk"
        />
      </div>
    );
  };

  const RightContent = () => {
    return (
      <>
        <p className={styles.profileContentTitle}>
          <b>AV. ARB. ÖZNUR İLHAN KARABULUT</b>
        </p>
        <p className={styles.profileContentBody}>
          2010 YILINDA MALTEPE ÜNİVERSİTESİ HUKUK FAKÜLTESİNDEN MEZUN OLMASININ
          ARDINDAN ÖZEL HUKUK ALANINDA ÇALIŞMA HAYATI OLMUŞTUR. 2020 YILINDA
          ARABULUCULUK DAİRE BAŞKANLIĞI SİCİLİNE KAYIT OLARAK 12511 SİCİL NOLU
          ARABULUCU OLARAK GÖREV YAPMAYA BAŞLAMIŞTIR.
        </p>
      </>
    );
  };

  return (
    <div>
      <MyGrid
        breadcrumbs={
          <MyBreadcrumbs
            link1Title="Ben Kimim"
            link1Href="/Arabulucu"
            activePageNumber="1"
          />
        }
        title="Ben Kimim ?"
        leftContent={<LeftContent />}
        rightContent={<RightContent />}
      />
    </div>
  );
}
