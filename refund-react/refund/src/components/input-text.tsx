import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import Text from "./text";

export const inputVariants = tv({
    slots: {
        container: "flex flex-col gap-2 group",
        label: `
            text-gray-200 group-focus-within:text-green-100 
            group-focus-within:font-bold transition-all`,
        wrapper: `
            border-2 border-solid border-gray-300 
            focus-within:border-green-100 bg-transparent rounded flex 
            items-center p-4`,
        input: `
            bg-transparent outline-none placeholder:text-gray-200 
            flex-1 text-gray-100 caret-green-100`,
    },
    variants: {
        size: {
            md: {
                wrapper: "w-60 h-6",
            },
        },
    },
    defaultVariants: {
        size: "md",
    },
});

interface InputTextProps
    extends
        Omit<React.ComponentProps<"input">, "size">,
        VariantProps<typeof inputVariants> {
    title: string;
}

export default function InputText({
    className,
    size,
    title,
    ...props
}: InputTextProps) {
    const { container, label, wrapper, input } = inputVariants({ size });

    return (
        <div className={container()}>
            <Text variant="body-xs" className={label()}>
                {title}
            </Text>
            <div className={wrapper({ className })}>
                <input className={input()} type="text" {...props} />
            </div>
        </div>
    );
}
