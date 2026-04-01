import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import Text from "./text";

export const buttonVariants = tv({
    base: `
        flex items-center justify-center 
        bg-green-100 hover:bg-green-200 
        h-12 rounded-lg cursor-pointer
    `,
    variants: {
        size: {
            sm: "w-28 ",
            md: "w-[9.688rem]",
            lg: "w-108",
        },
        disabled: {
            true: "opacity-50 pointer-events-none",
        },
    },
    defaultVariants: {
        size: "md",
        disabled: false,
    },
});

interface ButtonProps
    extends
        VariantProps<typeof buttonVariants>,
        React.ComponentProps<"button"> {}

export default function Button({
    children,
    size,
    disabled,
    className,
    ...props
}: ButtonProps) {
    return (
        <button
            className={buttonVariants({ size, disabled, className })}
            {...props}
            disabled={disabled as boolean}
        >
            <Text className="text-white" variant="heading-sm-bold">
                {children}
            </Text>
        </button>
    );
}
