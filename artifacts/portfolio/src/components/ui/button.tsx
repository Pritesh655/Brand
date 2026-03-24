import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

export function buttonVariants(options?: { variant?: ButtonProps["variant"]; size?: ButtonProps["size"]; className?: string }) {
  const { variant = "default", size = "default", className } = options ?? {};
  return cn(
    "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
    {
      "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/10 hover:shadow-primary/20 hover:-translate-y-0.5 active:translate-y-0": variant === "default",
      "border border-border bg-transparent hover:bg-secondary hover:text-secondary-foreground": variant === "outline",
      "hover:bg-secondary hover:text-secondary-foreground": variant === "ghost",
      "underline-offset-4 hover:underline text-primary": variant === "link",
      "h-12 px-7 py-3": size === "default",
      "h-9 px-4 py-2": size === "sm",
      "h-14 px-10 text-base": size === "lg",
      "h-12 w-12": size === "icon",
    },
    className
  );
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={buttonVariants({ variant, size, className })}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
