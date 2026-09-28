export function PendingText({ text }: { text: string }) {
  const parts = text.split(/(\[COMPLETAR:[^\]]+\])/g);
  return parts.map((part, index) =>
    part.startsWith("[COMPLETAR:") ? (
      <span key={`${part}-${index}`} className="pending">
        {part}
      </span>
    ) : (
      <span key={`${part}-${index}`}>{part}</span>
    ),
  );
}
