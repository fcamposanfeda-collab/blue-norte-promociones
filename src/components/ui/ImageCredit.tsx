import type { ImageCredit as ImageCreditData } from "@/types/content";

export function ImageCredit({ credit, className = "" }: { credit: ImageCreditData; className?: string }) {
  return (
    <p className={className}>
      Foto:{" "}
      <a href={credit.authorUrl} className="underline underline-offset-2" rel="noreferrer" target="_blank">
        {credit.author}
      </a>
      ,{" "}
      <a href={credit.licenseUrl} className="underline underline-offset-2" rel="noreferrer" target="_blank">
        {credit.license}
      </a>
      .{" "}
      <a href={credit.sourceUrl} className="underline underline-offset-2" rel="noreferrer" target="_blank">
        Original
      </a>
    </p>
  );
}
