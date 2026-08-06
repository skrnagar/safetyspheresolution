import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold transition-all touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/60 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-brand-red text-white shadow-sm hover:bg-[#d12f3c] active:translate-y-px",
        secondary:
          "bg-brand-navy text-white hover:bg-[#0e2a5c] active:translate-y-px",
        outline:
          "border border-brand-navy/20 bg-white text-brand-navy hover:border-brand-navy/40 hover:bg-slate-50",
        ghost:
          "text-brand-navy hover:bg-slate-100",
        light:
          "border border-white/50 bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-brand-navy",
      },
      size: {
        default: "h-11 min-h-11 px-5",
        sm: "h-10 min-h-10 px-3.5 text-xs",
        lg: "h-12 min-h-12 px-6 text-base sm:px-7",
        icon: "h-11 w-11 min-h-11 min-w-11",
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
