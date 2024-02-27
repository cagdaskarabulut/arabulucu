import MetaPanel from "../components/MetaPanel";
import UcretHesaplamaPanel from "@/components/UcretHesaplamaPanel";
import PageTemplate from "@/components/PageTemplate";

//-Ucret-Hesaplama sayfası
export default function UcretHesaplama() {
  return (
    <>
      <MetaPanel
        title="Arabuluculuk Ücret Hesaplamaları - Avukat Arabulucu Öznur İlhan Karabulut"
        descriptionContent="Avukat Arabulucu Öznur İlhan Karabulut'un arabuluculuk ücret hesaplamaları sayfası. Arabuluculuk hizmetlerinin maliyetini hesaplamak için kullanabileceğiniz araçlar ve bilgiler. Hukuki sorunlarınıza çözüm bulmak için bize başvurun. (Kolay, anlaşılır, basit, sade arabuluculuk ücret hesaplama aracı)"
        keywordsContent="Arabulucu Ücret Hesapla, Arabuluculuk Ücreti Hesaplama Aracı, Arabulucu Ücret Hesapla, Arabuluculuk, Ücret Hesaplamaları, Arabuluculuk Maliyeti, Arabulucu Avukat, Hukuki Hizmetler, Hukuki Danışmanlık, Hukuk Destek, Hukuki Çözüm"
      />
      <PageTemplate content={<UcretHesaplamaPanel />} />
    </>
  );
}
