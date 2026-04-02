import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

export const cardVariants = tv({
    base: `bg-white p-10 flex flex-col rounded-2xl`,
    variants: {
        size: {
            md: "w-lg",
            lg: "w-270.5",
        },
    },
    defaultVariants: {
        size: "md",
    },
});

interface CardProps
    extends
        React.ComponentPropsWithoutRef<"div">,
        VariantProps<typeof cardVariants> {
    as?: keyof React.JSX.IntrinsicElements;
}

export default function Card({
    as = "div",
    className,
    size,
    children,
}: CardProps) {
    return React.createElement(
        as,
        { className: cardVariants({ size, className }) },
        children,
    );
}
