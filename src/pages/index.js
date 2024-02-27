import MetaPanel from "@/components/MetaPanel";
import ArabuluculukPanel from "@/components/ArabuluculukPanel";
import PageTemplate from "@/components/PageTemplate";

//- Açılış sayfası
export default function Home() {
  return (
    <>
      <MetaPanel
        title="Arabuluculuk nedir? - Avukat Arabulucu Öznur İlhan Karabulut - Arabuluculuk ve Hukuk Danışmanlığı - İstanbul Arabulucu"
        descriptionContent="Avukat Arabulucu Öznur İlhan Karabulut, pek çok dava konusunda deneyime sahip bir avukat ve arabulucudur. Arabuluculuk ve hukuk danışmanlığı alanında uzmanlık sunar. İhtiyaçlarınıza özel çözümler için bize başvurun ve hukuki sorunlarınızı çözümleyin."
        keywordsContent="istanbul arabulucu, Uzman Arabulucu, İş Hukuku Arabulucusu, Kira Hukuku Arabulucusu, İş Hukuku, Kira Hukuku, Ortaklığın Giderilmesi, Mal Paylaşımı, Ortaklığın Giderilmesi Arabuluculuğu, Avukat Arabulucu, Öznur İlhan Karabulut, Arabuluculuk, Hukuk Danışmanlığı, Hukuki Uzmanlık, Hukuki Destek, Uyuşmazlık Çözümü, Deneyimli Hukukçu, ıstanbul arabulucu"
        imagePath="/images/Arabulucu.jpg"
        imageAlt="Arabulucu"
      />
      <PageTemplate content={<ArabuluculukPanel />} />
    </>
  );
}
