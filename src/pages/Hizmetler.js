import MetaPanel from "../components/MetaPanel";
import PageTemplate from "@/components/PageTemplate";
import SendIcon from "@mui/icons-material/Send";
import MyGrid from "@/components/tools/MyGrid";
import MyBreadcrumbs from "@/components/tools/MyBreadcrumbs";

export default function Hizmetler() {
  const PageContentHizmetler = () => {
    return (
      <div>
        <SendIcon style={{ fontSize: "12px" }} /> İŞÇİ İŞVEREN UYUŞMAZLIKLARINDA
        ARABULUCULUK
        <br />
        <br />
        <SendIcon style={{ fontSize: "12px" }} /> TİCARİ UYUŞMAZLIKLARDA
        ARABULUCULUK
        <br />
        <br />
        <SendIcon style={{ fontSize: "12px" }} /> TÜKETİCİ UYUŞMAZLIKLARINDA
        ARABULUCULUK
        <br />
        <br />
        <SendIcon style={{ fontSize: "12px" }} /> TARIMSAL ÜRETİM SÖZLEŞMESİNDEN
        KAYNAKLI UYUŞMAZLIKLARDA ARABULUCULUK
        <br />
        <br />
        <SendIcon style={{ fontSize: "12px" }} /> KİRA HUKUKU
        ANLAŞMAZLIKLARINDAN KAYNAKLI UYUŞMAZLIKLARDA ARABULUCULUK
      </div>
    );
  };

  return (
    <>
      <MetaPanel
        title="Öznur İlhan Karabulut - Uzman Arabulucu ve Avukat - Hizmetlerimiz"
        descriptionContent="Avukat Arabulucu Öznur İlhan Karabulut, işçi-işveren uyuşmazlıkları, ticari uyuşmazlıklar, tüketici uyuşmazlıkları, tarımsal üretim sözleşmesi anlaşmazlıkları ve kira hukuku anlaşmazlıkları konularında uzmanlaşmış bir hukukçu ve arabulucudur. Deneyimimizle hukuki sorunlarınıza çözüm sunuyoruz."
        keywordsContent="Uzman Arabulucu, Avukat, İşçi-İşveren Uyuşmazlıkları, Ticari Uyuşmazlıklar, Tüketici Uyuşmazlıkları, Tarımsal Üretim Sözleşmesi, Kira Hukuku Anlaşmazlıkları, Hukuki Danışmanlık, Hukuk Destek, Hukuk Danışmanı"
      />
      <PageTemplate
        content={
          <MyGrid
            breadcrumbs={
              <MyBreadcrumbs
                link1Title="Hizmetler"
                link1Href="/Hizmetler"
                activePageNumber="1"
              />
            }
            title="Arabuluculuk Hizmetlerimiz"
            leftContent={<PageContentHizmetler />}
            isOneFullContent={true}
          />
        }
      />
    </>
  );
}
