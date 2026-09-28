import Link from "next/link";

const variants = {
  primary: "bg-navy text-ivory hover:bg-navy-deep",
  light: "bg-ivory text-navy hover:bg-sand",
  ghost: "border border-current bg-transparent hover:bg-white/10",
  sand: "bg-sand text-navy hover:bg-ivory-deep",
};

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: keyof typeof variants;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = `inline-flex min-h-11 items-center justify-center px-5 text-sm font-medium tracking-wide transition ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
