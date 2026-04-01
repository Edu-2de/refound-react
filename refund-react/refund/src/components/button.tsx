import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import CircleNotch from "../assets/icons/circle-notch.svg?react";
import Icon from "./icon";
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
        React.ComponentProps<"button"> {
    handling?: boolean;
}

export default function Button({
    children,
    size,
    disabled,
    handling,
    className,
    ...props
}: ButtonProps) {
    const isHandling = disabled || handling;

    return (
        <button
            className={buttonVariants({
                size,
                disabled: isHandling,
                className,
            })}
            {...props}
            disabled={isHandling as boolean}
        >
            {handling ? (
                <Icon
                    className="w-6 h-6 fill-white"
                    animate
                    svg={CircleNotch}
                />
            ) : (
                <Text className="text-white" variant="heading-sm-bold">
                    {children}
                </Text>
            )}
        </button>
    );
}
