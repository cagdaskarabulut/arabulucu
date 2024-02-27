import MetaPanel from "../components/MetaPanel";
import PageTemplate from "@/components/PageTemplate";
import MyGrid from "@/components/tools/MyGrid";
import MyBreadcrumbs from "@/components/tools/MyBreadcrumbs";

export default function Dosyalarim() {
  const PageContentDosyalarim = () => {
    return <p style={{ marginTop: "0px" }}>Dosyalarim</p>;
  };

  return (
    <>
      <MetaPanel
        title="Arabuluculuk Dosyalarım"
        descriptionContent="Kendi Arabuluculuk Dosyalarım"
        isDontFollowByRobots={true}
      />
      <PageTemplate
        content={
          <MyGrid
            breadcrumbs={
              <MyBreadcrumbs
                link1Title="Dosyalarım"
                link1Href="/Dosyalarim"
                activePageNumber="1"
              />
            }
            title="Arabuluculuk Dosyalarım"
            leftContent={<PageContentDosyalarim />}
            isOneFullContent={true}
          />
        }
      />
    </>
  );
}
