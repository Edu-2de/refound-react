import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import Icon from "./icon";
import CircleIcon from "../assets/icons/circle-notch.svg?react";

export const buttonIconVariants = tv({
    base: `
        inline-flex items-center justify-center cursor-pointer transition
         bg-green-100 hover:bg-green-200 rounded-lg
    `,
    variants: {
        size: {
            md: "w-12 h-12",
            sm: "w-8 h-8",
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

interface ButtonIconProps
    extends
        VariantProps<typeof buttonIconVariants>,
        React.ComponentProps<"button"> {
    icon: React.ComponentProps<typeof Icon>["svg"];
    ariaLabel: string;
    handling?: boolean;
}

export default function ButtonIcon({
    icon,
    size,
    handling,
    disabled,
    ariaLabel,
    className,
    ...props
}: ButtonIconProps) {
    const isHandling = handling || disabled;

    return (
        <button
            aria-label={ariaLabel}
            disabled={isHandling}
            className={buttonIconVariants({
                size,
                disabled: isHandling,
                className,
            })}
            {...props}
        >
            {handling ? (
                <Icon animate className="w-6 h-6 fill-white" svg={CircleIcon} />
            ) : (
                <Icon className="w-6 h-6 fill-white" svg={icon} />
            )}
        </button>
    );
}
