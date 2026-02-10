import { Separator } from "@/components/ui/separator";
import { colors } from "@/lib/colors";
import { stripHtml } from "@/lib/db/functions";
import { LegislationItem } from "@/lib/types/bulletin";
import he from "he";

type LegislationDisplayProps = {
  item: LegislationItem;
};

export default function LegislationDisplay({ item }: LegislationDisplayProps) {
  if (!item) return null;

  console.info(item);
  const decodedText = he.decode(item.texto || "");

  return (
    <div className="mx-20 mt-5">
      <h1 style={{ color: colors.primary.title }} className="text-3xl">
        {stripHtml(item.titulo)}
      </h1>

      <p className="mt-10 mb-5">Ementa</p>

      <p>{stripHtml(item.resumo)}</p>

      <Separator className="my-5 bg-[#006092]" />

      <div
        className="mx-auto max-w-full"
        dangerouslySetInnerHTML={{ __html: decodedText }}
      ></div>

      <Separator className="my-5 bg-[#006092]" />

      {item.comentario && (
        <div>
          <p className="mb-5">
            <strong>Nota Da Redação INR</strong>
          </p>
          <p className="mb-5">{stripHtml(item.comentario)}</p>
          <p>
            O conteúdo deste ato é coincidente com aquele publicado
            oficialmente. Eventuais alterações posteriores em seu objeto, ou sua
            revogação, não são consideradas, isto é, este ato permanecerá, na
            Base de Dados INR, tal qual veio ao mundo jurídico, ainda que,
            posteriormente, alterado ou revogado
          </p>
        </div>
      )}
    </div>
  );
}
