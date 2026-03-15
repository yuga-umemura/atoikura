import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement>;

export function Card({ className = "", ...props }: Props) {
  return (
    <div
      className={`rounded-xl border border-(--border) bg-white p-4 shadow-sm ${className}`}
      {...props}
    />
  );
}
