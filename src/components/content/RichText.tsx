import Link from "next/link";
import { PendingText } from "@/components/ui/PendingText";

export function RichParagraph({ text, className = "" }: { text: string; className?: string }) {
  const parts: React.ReactNode[] = [];
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(<PendingText key={`t-${lastIndex}`} text={text.slice(lastIndex, match.index)} />);
    }
    parts.push(
      <Link
        key={`l-${match.index}`}
        href={match[2]}
        className="underline decoration-accent/50 underline-offset-4 hover:decoration-accent-ink"
      >
        {match[1]}
      </Link>,
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(<PendingText key={`t-${lastIndex}`} text={text.slice(lastIndex)} />);
  }

  return <p className={className}>{parts}</p>;
}
