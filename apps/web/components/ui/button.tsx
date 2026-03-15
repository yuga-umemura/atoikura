import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement>;

export function Button({ className = "", ...props }: Props) {
  return (
    <div
      className={`rounded-xl border border-(--border) px-4 py-2 text-sm font-medium ${className}`}
      {...props}
    />
  );
}
