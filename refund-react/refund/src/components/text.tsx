import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

export const textVariants = tv({
    base: `font-sans`,
    variants: {
        variant: {
            "body-xs": "text-[0.625rem] leading-3.5",
            "body-sm": "text-xs leading-4",
            "body-md": "text-sm leading-4.5",

            "heading-sm-bold": "text-sm leading-4.5 font-bold",
            "heading-sm-semibold": "text-sm leading-4.5 font-semibold",
            "heading-lg-bold": "text-2xl leading-6 font-bold",
        },
    },
    defaultVariants: {
        variant: "body-md",
    },
});

interface TextProps
    extends
        React.ComponentPropsWithoutRef<"span">,
        VariantProps<typeof textVariants> {
    as?: keyof React.JSX.IntrinsicElements;
    className?: string;
    children?: React.ReactNode;
}

export default function Text({
    children,
    className,
    variant,
    as = "span",
    ...props
}: TextProps) {
    return React.createElement(
        as,
        {
            className: textVariants({ variant, className }),
            ...props,
        },
        children,
    );
}
