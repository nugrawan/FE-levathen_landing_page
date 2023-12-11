import * as React from "react";
import { cva } from "class-variance-authority";

import { rc } from "@/lib/utils";

const buttonVariants = cva("rounded-3xl font-semibold sm:text-base text-sm", {
  variants: {
    variant: {
      default: "hover:opacity-80 bg-primary-default text-white",
      secondary: "bg-white text-primary-default hover:bg-gray-100",
    },
    size: {
      default: "px-7 py-3",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

const Button = React.forwardRef(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={rc(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
