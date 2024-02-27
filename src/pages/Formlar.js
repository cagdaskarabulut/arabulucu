import MetaPanel from "../components/MetaPanel";
import PageTemplate from "@/components/PageTemplate";
import MyGrid from "@/components/tools/MyGrid";
import MyBreadcrumbs from "@/components/tools/MyBreadcrumbs";

export default function Formlar() {
  const PageContentFormlar = () => {
    return <p style={{ marginTop: "0px" }}>Formlar</p>;
  };
  return (
    <>
      <MetaPanel
        title="Arabuluculuk Formları"
        descriptionContent="Arabuluculuk ve İcra Hukuku Konularında Uzman"
        keywordsContent="Arabuluculuk ve İcra Hukuku Konularında Güncel Formlar"
        isDontFollowByRobots={true}
      />
      <PageTemplate
        content={
          <MyGrid
            breadcrumbs={
              <MyBreadcrumbs
                link1Title="Formlar"
                link1Href="/Formlar"
                activePageNumber="1"
              />
            }
            title="Arabuluculuk Formları"
            leftContent={<PageContentFormlar />}
            isOneFullContent={true}
          />
        }
      />
    </>
  );
}
