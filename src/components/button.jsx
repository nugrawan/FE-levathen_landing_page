import * as React from "react";
import { cva } from "class-variance-authority";

import { rc } from "@/lib/utils";

const buttonVariants = cva("rounded-3xl font-semibold sm:text-base text-xs", {
  variants: {
    variant: {
      default: "hover:opacity-80 bg-primary-default text-white",
      secondary: "bg-white text-primary-default hover:bg-gray-100 border-2",
    },
    size: {
      default: "md:px-7 md:py-3 px-5 py-2",
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
