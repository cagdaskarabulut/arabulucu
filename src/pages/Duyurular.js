import MetaPanel from "../components/MetaPanel";
import PageTemplate from "@/components/PageTemplate";
import MyGrid from "@/components/tools/MyGrid";
import MyBreadcrumbs from "@/components/tools/MyBreadcrumbs";

export default function Duyurular() {
  const PageContentDuyurular = () => {
    return <p style={{ marginTop: "0px" }}>Duyurular</p>;
  };

  return (
    <>
      <MetaPanel
        title="Arabuluculuk Duyuruları"
        descriptionContent="Arabuluculuk ve İcra Hukuku Konularında Güncel Duyurular"
        isDontFollowByRobots={true}
      />
      <PageTemplate
        content={
          <MyGrid
            breadcrumbs={
              <MyBreadcrumbs
                link1Title="Duyurular"
                link1Href="/Duyurular"
                activePageNumber="1"
              />
            }
            title="Arabuluculuk Duyuruları"
            leftContent={<PageContentDuyurular />}
            isOneFullContent={true}
          />
        }
      />
    </>
  );
}
