import { forwardRef } from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "focus-ring inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold uppercase tracking-wide transition-all duration-200 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-gold-500 text-navy-950 hover:bg-gold-400 shadow-navy-sm hover:shadow-navy-md hover:-translate-y-[1px]",
        outline:
          "border border-white/30 text-white hover:bg-white/10 hover:-translate-y-[1px]",
        navyOutline:
          "border border-navy-900/20 text-navy-900 hover:bg-navy-900/5 hover:-translate-y-[1px]",
        dark:
          "bg-navy-900 text-white hover:bg-navy-800 shadow-navy-sm hover:shadow-navy-md hover:-translate-y-[1px]",
        whatsapp:
          "bg-whatsapp text-white hover:bg-whatsapp-dark shadow-navy-sm hover:-translate-y-[1px]",
        ghost: "text-navy-900 hover:bg-navy-900/5",
      },
      size: {
        default: "h-12 px-6 text-sm",
        lg: "h-14 px-8 text-base",
        sm: "h-10 px-4 text-sm",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

const Button = forwardRef(({ className, variant, size, as: Comp = "button", ...props }, ref) => {
  return <Comp className={cn(buttonVariants({ variant, size }), className)} ref={ref} {...props} />;
});
Button.displayName = "Button";

export { Button, buttonVariants };
