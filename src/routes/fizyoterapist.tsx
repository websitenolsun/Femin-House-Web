import { createFileRoute } from "@tanstack/react-router";
import { SenaProfilePage } from "@/components/SenaProfilePage";
import { canonicalLink, pageStructuredData } from "@/lib/seo";

export const Route = createFileRoute("/fizyoterapist")({
  head: () => ({
    meta: [
      { title: "Fzt. Sena ER | Fem'n House" },
      {
        name: "description",
        content:
          "Fzt. Sena ER, Fem'n House'ta manuel terapi, klinik egzersiz, postür, nefes, pelvik taban terapisi ve rehabilitasyon alanlarında hizmet verir.",
      },
    ],
    links: [canonicalLink("/fizyoterapist")],
    scripts: pageStructuredData({
      path: "/fizyoterapist",
      name: "Fzt. Sena ER | Fem'n House",
      description:
        "Fzt. Sena ER, Fem'n House'ta manuel terapi, klinik egzersiz, postur, nefes, pelvik taban terapisi ve rehabilitasyon alanlarinda hizmet verir.",
      breadcrumbs: [
        { name: "Ana Sayfa", path: "/" },
        { name: "Fzt. Sena ER", path: "/fizyoterapist" },
      ],
    }),
  }),
  component: SenaProfilePage,
});
