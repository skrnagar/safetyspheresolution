import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/60 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-brand-red text-white shadow-sm hover:bg-[#d12f3c] active:translate-y-px",
        secondary:
          "bg-brand-navy text-white hover:bg-[#0e2a5c] active:translate-y-px",
        outline:
          "border border-brand-navy/20 bg-white text-brand-navy hover:border-brand-navy/40 hover:bg-slate-50 dark:bg-transparent dark:text-white dark:border-white/30 dark:hover:bg-white/10",
        ghost:
          "text-brand-navy hover:bg-slate-100 dark:text-white dark:hover:bg-white/10",
        light:
          "border border-white/50 bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-brand-navy",
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 px-3.5 text-xs",
        lg: "h-12 px-7 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const classes = cn(buttonVariants({ variant, size, className }));

    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<{ className?: string }>;
      return React.cloneElement(child, {
        className: cn(classes, child.props.className),
        ...props,
      } as never);
    }

    return (
      <button className={classes} ref={ref} {...props}>
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { buttonVariants };
