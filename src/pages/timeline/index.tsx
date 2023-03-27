import { HeaderSEO } from "@app/components/Layout/HeaderSEO";
import { PageTitle } from "@app/components/PageTitle";
import { Timeline } from "@app/components/Timeline";

export default function TimelinePage() {
  return (
    <>
      <HeaderSEO title="Minha Linha do Tempo" />
      <PageTitle title="Minha Linha do Tempo" />
      <Timeline />
    </>
  );
}
