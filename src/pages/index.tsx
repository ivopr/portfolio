import { HeaderSEO } from "@app/components/Layout/HeaderSEO";
import { Timeline } from "@app/components/Timeline";

export default function Home() {
  return (
    <section className="flex flex-col gap-y-4">
      <HeaderSEO title="Inicio" />
      <h1 className="text-5xl font-bold">Olá,</h1>
      <p>
        Meu nome é Ivo, sou estudante de Ciência da Computação na UNIR
        (Universidade Federal de Rondônia) e bolsista pelo Programa de
        Excelência em Pesquisa (PROEP) da Fiocruz.
      </p>
      <p>
        Além da reta final do curso de graduação, grande parte do meu tempo é
        utilizado no desenvolvimento do Visual Dynamics, que você pode conhecer
        um melhor na página dos meus projetos.
      </p>

      <Timeline
        showTitle
        showRecentsOnly
      />
    </section>
  );
}
