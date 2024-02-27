import MetaPanel from "../components/MetaPanel";
import PageTemplate from "@/components/PageTemplate";
import ArabulucuPanel from "../components/ArabulucuPanel";

export default function Arabulucu() {

  return (
    <>
      <MetaPanel
        title="Avukat Arabulucu Öznur İlhan Karabulut - Hakkımda"
        descriptionContent="Avukat Arabulucu Öznur İlhan Karabulut, hukuki alanda geniş deneyime sahip bir profesyoneldir. Avukatlık kariyeri boyunca pek çok dava çözmüş ve arabuluculuk konusunda uzmanlaşmıştır. Kendisi hakkında daha fazla bilgi edinin ve hukuki sorunlarınıza çözüm bulmak için bize başvurun."
        keywordsContent="Öznur İlhan Karabulut, Öznur İlhan, Öznur Karabulut, oznur ilhan karabulut, oznur karabulut, iletişim, arabulucu iletişim, Avukat, Arabulucu, Hukuki Danışman, Uzmanlık Alanları, Hukuk Danışmanlığı, Hukuki Destek, Deneyimli Hukukçu, Avukat Özgeçmişi, Hakkımda, Öznur İlhan Karabulut, Arabuluculuk, Arabulucu Nasıl Bulurum, İyi Bir Arabulucu Arıyorum, İyi Bir Avukat Arıyorum, Arabulucu Bul, Arabulucu İle Anlaş, Arabulucu Tut"
      />
      <PageTemplate
        content={<ArabulucuPanel/> }
      />
    </>
  );
}
