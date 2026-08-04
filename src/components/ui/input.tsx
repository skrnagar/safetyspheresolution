import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => (
  <input
    type={type}
    className={cn(
      "flex h-11 w-full rounded-md border border-slate-200 bg-white px-3.5 py-2 text-sm text-slate-900 shadow-sm transition placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy/30 dark:border-white/15 dark:bg-white/5 dark:text-white",
      className
    )}
    ref={ref}
    {...props}
  />
));
Input.displayName = "Input";
