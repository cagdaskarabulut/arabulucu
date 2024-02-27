import MetaPanel from "../components/MetaPanel";
import SorularPanel from "@/components/SorularPanel";
import PageTemplate from "@/components/PageTemplate";

//-Sorular sayfası
export default function Sorular() {
  return (
    <>
      <MetaPanel
        title="Arabuluculuk Sık Sorulan Sorular ve Cevaplar - Avukat Arabulucu Öznur İlhan Karabulut"
        descriptionContent="Arabulucu ve Avukat Öznur İlhan Karabulut tarafından hazırlanan Arabuluculuk Sık Sorulan Sorular ve Cevaplar sayfası. Hukuki konularda merak ettiğiniz soruların yanıtlarını bulun. Arabuluculuk hakkında daha fazla bilgi edinin ve hukuki sorunlarınıza çözüm bulun."
        keywordsContent="Arabuluculuk sorular, arabuluculuk cevaplar, Avukatlık Sorular, Avukatlık Cevaplar, Arabuluculuk, Sık Sorulan Sorular, Hukuki Sorular, Arabuluculuk Cevapları, Avukat, Hukuki Danışmanlık, Hukuki Çözüm, Uyuşmazlık Çözümü"
      />
      <PageTemplate content={<SorularPanel />} />
    </>
  );
}
