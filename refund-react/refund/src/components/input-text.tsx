import React, { useId } from "react";
import type { VariantProps } from "tailwind-variants";
import { Input, inputVariants } from "./input";

interface InputTextProps
    extends
        Omit<React.ComponentProps<"input">, "size">,
        VariantProps<typeof inputVariants> {
    title: string;
    wrapperClassName?: string;
}

export default function InputText({
    className,
    wrapperClassName,
    size,
    title,
    id,
    ...props
}: InputTextProps) {
    const generatedId = useId();
    const inputId = id || generatedId;

    return (
        <Input.Root className={className}>
            <Input.Label htmlFor={inputId}>{title}</Input.Label>

            <Input.Wrapper className={wrapperClassName} size={size}>
                <Input.Field id={inputId} {...props} />
            </Input.Wrapper>
        </Input.Root>
    );
}
