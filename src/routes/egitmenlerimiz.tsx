import { createFileRoute, redirect } from "@tanstack/react-router";
import { SenaProfilePage } from "@/components/SenaProfilePage";
import { canonicalLink } from "@/lib/seo";

export const Route = createFileRoute("/egitmenlerimiz")({
  loader: () => {
    throw redirect({
      to: "/fizyoterapist",
      replace: true,
      statusCode: 301,
    });
  },
  head: () => ({
    meta: [
      { title: "Fzt. Sena ER | Fem'n House" },
      {
        name: "description",
        content:
          "Fzt. Sena ER, Fem'n House'ta manuel terapi, klinik egzersiz, postür, nefes, pelvik taban terapisi ve rehabilitasyon alanlarında hizmet verir.",
      },
      { name: "robots", content: "noindex, follow" },
    ],
    links: [canonicalLink("/fizyoterapist")],
  }),
  component: SenaProfilePage,
});
