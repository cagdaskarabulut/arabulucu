import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Grid } from "@mui/material";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import MyGrid from "./tools/MyGrid";
import MyBreadcrumbs from "@/components/tools/MyBreadcrumbs";

export default class SorularPanel extends Component {
  render() {
    const LeftContent = () => {
      return (
        <>
          <p style={{ marginTop: "0px" }}>
            <QuestionAnswerIcon
              style={{ fontSize: "16px", paddingRight: "5px" }}
            />
            <b>ARABULUCULUĞA ELVERİŞLİ ALANLAR NELERDİR?</b>
            <br />
            Tarafların üzerinde serbestçe tasarruf edebildikleri her özel hukuk
            uyuşmazlığı için arabuluculuğa gidilebilir. Tarafların sulh
            olabildikleri özel hukuk uyuşmazlıkları arabuluculuğa elverişlidir,
            şeklinde de ifade edebiliriz. Arabuluculuğa elverişli uyuşmazlıklar,
            yabancılık unsuru da taşıyabilir.
          </p>
          <p>
            <QuestionAnswerIcon
              style={{ fontSize: "16px", paddingRight: "5px" }}
            />
            <b>ARABULUCU NASIL SEÇİLİR?</b> <br />
            Taraflar arabulucuyu kendileri seçebilirler. Taraflar arabulucunun
            kim olacağı konusunda anlaşmaya varamazlar ise, dava şartı
            arabuluculukta arabulucu, adliyelerdeki arabuluculuk bürolarındaki
            görevli personel tarafından sicile kayıtlı arabulucular listesinden
            atanır.
          </p>
          <p>
            <QuestionAnswerIcon
              style={{ fontSize: "16px", paddingRight: "5px" }}
            />
            <b>ARABULUCU KİMDİR?</b> <br />
            Arabulucu, taraflar arasındaki çatışmanın çözümüne yardımcı olmak
            amacıyla arabuluculuk sürecini idare eden ve arabuluculuk
            yöntemlerini bilip uygulayabilen tarafsız gerçek kişidir.
          </p>
          <p>
            <QuestionAnswerIcon
              style={{ fontSize: "16px", paddingRight: "5px" }}
            />
            <b>ARABULUCULUKTA ÜCRET KİM TARAFINDAN ÖDENİR?</b> <br />
            Arabuluculuk ücreti 6325 sayılı Hukuki Uyuşmazlıklarında
            Arabuluculuk Kanununa göre taraflarca aksi kararlaştırılmadıkça eşit
            olarak ödenir. Ancak ücretin hangi tarafça ödeneceği ve ne kadar
            olacağı müzakerelere başlanmadan önce taraflarca özel olarak da
            belirlenebilir. Dava şartı arabuluculuklarda ise anlaşmama halinde
            iki saatten az süren görüşmeler için Arabuluculuk ücreti yargılama
            sonrası haksız çıkan veya arabuluculuk ilk toplantısına katılmayan
            tarafa yükletilmek üzere Adalet Bakanlığı bütçesinden ödenir.
          </p>
          <p>
            <QuestionAnswerIcon
              style={{ fontSize: "16px", paddingRight: "5px" }}
            />
            <b>ARABULUCULUK TOPLANTISINA KATILMAM NE İFADE EDER?</b> <br />
            Arabuluculuk toplantısına katılmanız sizin herhangi bir sonucu kabul
            ettiğiniz veya bir anlaşmaya vardığınız anlamına gelmemektedir.
          </p>
        </>
      );
    };

    const RightContent = () => {
      return (
        <>
          <p style={{ marginTop: "0px" }}>
            <QuestionAnswerIcon
              style={{ fontSize: "16px", paddingRight: "5px" }}
            />
            <b>ARABULUCU İLE AVUKAT ARASINDAKİ FARKLAR NELERDİR?</b> <br />
            Avukat, hukuki ilişkilerin düzenlenmesi ve hukuki uyuşmazlıkların
            çözümünde bilgi ve tecrübesini adaletin hizmetine ve kişilerin
            yararlanmasına sunan kimsedir. “Avukat” uyuşmazlık taraflarından
            birini temsil eder; onun hak ve menfaatlerinin korunmasına yardımcı
            olur; dolayısıyla taraflıdır. “Arabulucu” ise uyuşmazlığın çözümüne
            yardımcı olur, tarafı temsil etmez; tarafsızdır. Avukat hukuki
            bilgisi ile taraflara hizmet sunarken arabulucu, tarafa hukuki
            açından görüş vermez, yol göstermez. Ancak bu konuda bir ihtiyaç
            olması hâlinde, ihtiyaç duyan taraflara bir avukata başvurarak yasal
            tavsiye almalarını önerebilir
          </p>
          <p>
            <QuestionAnswerIcon
              style={{ fontSize: "16px", paddingRight: "5px" }}
            />
            <b>ARABULUCULUK ANLAŞMA BELGESİNİN HUKUKİ NİTELİĞİ NEDİR?</b> <br />
            Taraflar arabuluculuk sürecinin sonunda bir anlaşmaya varırlarsa bu
            anlaşma taraflar için bağlayıcı olmaktadır. Anlaşmanın icra
            edilebilirliğine ilişkin şerh verilmesi, Sulh Hukuk Mahkemesinden
            talep edilebilir. Sulh Hukuk Mahkemesinden alınan icra edilebilirlik
            şerhinden sonra, ilgili karar mahkeme kararı niteliğini kazanır.
            Arabuluculuk anlaşma belgesindeki yükümlülükler yerine getirilmezse
            ifa edilmezse, söz konusu karar icra marifetiyle yerine getirtilir.
            Tarafların ve avukatlarının birlikte imzaladığı arabuluculuk anlaşma
            belgeleri mahkemeden şerh alınmasına gerek olmadan, mahkeme kararı
            gibi icraya konulabilir.
          </p>
          <p>
            <QuestionAnswerIcon
              style={{ fontSize: "16px", paddingRight: "5px" }}
            />
            <b>ARABULUCULUKTA GİZLİLİK NE DEMEKTİR?</b> <br />
            Tarafların, arabuluculuğa karşı güven duymasını sağlamak için
            gizlilikleri koruma altına alınmıştır. Gizlilik, iç ilişkide
            gizlilik ve dış ilişkide gizlilik olarak iki başlık altında da
            incelenebilir. Dış ilişkide gizlilik, arabuluculuk sürecinin kural
            olarak aleni olmamasını ve arabuluculuk sürecinde paylaşılan bilgi
            ve belgelerin üçüncü kişiler huzurunda ifşa edilmemesi demektir. İç
            ilişkide gizlilik ise aksi kararlaştırılmadıkça ve tarafın açık
            muvafakatı olmadıkça, arabulucunun özel oturumlar esnasında
            taraflardan birinden edindiği bilgiyi diğer tarafa aktaramayacak
            olması demektir.
          </p>
          <p>
            <QuestionAnswerIcon
              style={{ fontSize: "16px", paddingRight: "5px" }}
            />
            <b>ARABULUCULUKTA GİZLİLİĞİN İSTİSNALARI NELERDİR?</b> <br />
            Tarafların rızası ve arabuluculuk neticesinde varılan anlaşmanın
            uygulanması ve icrasıdır.
          </p>
        </>
      );
    };

    return (
      <div>
        <MyGrid
          breadcrumbs={
            <MyBreadcrumbs
              link1Title="Sorular"
              link1Href="/Sorular"
              activePageNumber="1"
            />
          }
          title="Arabuluculuk Hakkında Sık Sorulan Sorular ve Cevaplar"
          leftContent={<LeftContent />}
          rightContent={<RightContent />}
        />
      </div>
    );
  }
}
