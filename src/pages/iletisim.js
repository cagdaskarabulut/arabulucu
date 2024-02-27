import MetaPanel from "../components/MetaPanel";
import MessageForm from "@/components/MessageForm";
import PageTemplate from "@/components/PageTemplate";
import React from "react";

//-Ucret-Hesaplama sayfası
export default function iletisim() {

  return (
    <>
      <MetaPanel
        title="Avukat Arabulucu Öznur İlhan Karabulut - İletişim"
        descriptionContent="Avukat Arabulucu Öznur İlhan Karabulut ile iletişime geçmek için bu sayfayı kullanın. Deneyimli hukukçu ve arabulucu olan Öznur İlhan Karabulut'a hukuki sorunlarınızı iletebilirsiniz. İhtiyacınıza yönelik hukuki destek almak için bize ulaşın."
        keywordsContent="Avukat, Arabulucu, İletişim, Hukuki Destek, İletişim Bilgileri, Hukuk Danışmanlığı,Arabuluculuk Danışmanlığı, Uzman Arabulucu, Hukuk Danışman, Hukuki İletişim, Hukukçu"
      />
      <PageTemplate content={<MessageForm/>} />
    </>
  );
}
