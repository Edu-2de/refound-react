import React, { useId } from "react";
import { useWatch } from "react-hook-form";
import type { VariantProps } from "tailwind-variants";
import ButtonIcon from "./button-icon";
import { Input, inputVariants } from "./input";
import Text from "./text";

import CloudIcon from "../assets/icons/CloudArrowUp.svg?react";

interface InputTextProps
    extends
        Omit<React.ComponentProps<"input">, "size">,
        VariantProps<typeof inputVariants> {
    wrapperClassName?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    form?: any;
    maxFileSizeInMB: number;
    error?: React.ReactNode;
    allowedExtensions: string[];
}

export default function InputSingleFile({
    form,
    className,
    wrapperClassName,
    size,
    error,
    allowedExtensions,
    maxFileSizeInMB,
    id,
    ...props
}: InputTextProps) {
    const generatedId = useId();
    const inputId = id || generatedId;

    const formValues = useWatch({ control: form?.control });
    const name = props.name || "";
    const formFile: File = React.useMemo(
        () => formValues?.[name]?.[0],
        [formValues, name],
    );

    const { fileExtension, fileSize } = React.useMemo(
        () => ({
            fileExtension:
                formFile?.name?.split(".")?.pop()?.toLocaleLowerCase() || "",
            fileSize: formFile?.size || 0,
        }),
        [formFile],
    );

    function isValidExtension() {
        return allowedExtensions.includes(fileExtension);
    }

    function isValidSize() {
        return fileSize <= maxFileSizeInMB * 1024 * 1024;
    }

    function isValidFile() {
        return isValidExtension() && isValidSize();
    }

    const handleTriggerClick = () => {
        document.getElementById(inputId)?.click();
    };

    return (
        <div>
            {!formFile || !isValidFile() ? (
                <>
                    <Input.Root className={className}>
                        <Input.Label htmlFor={inputId}>COMPROVANTE</Input.Label>

                        <Input.Wrapper
                            className={`cursor-pointer pr-0 pl-4 ${wrapperClassName || ""}`}
                            size={size}
                            onClick={handleTriggerClick}
                        >
                            <input
                                type="file"
                                id={inputId}
                                className="hidden"
                                {...form?.register(name)}
                                {...props}
                            />

                            <Input.Field
                                type="text"
                                readOnly
                                placeholder="Nome do arquivo.pdf"
                                className="cursor-pointer pointer-events-none"
                                tabIndex={-1}
                            />

                            <ButtonIcon
                                type="button"
                                ariaLabel="ENVIAR ARQUIVO"
                                icon={CloudIcon}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleTriggerClick();
                                }}
                            />
                        </Input.Wrapper>
                    </Input.Root>

                    <div className="flex flex-col gap-1 mt-1">
                        {formFile && !isValidExtension() && (
                            <Text variant="body-sm" className="text-accent-red">
                                Tipo de arquivo inválido
                            </Text>
                        )}
                        {formFile && !isValidSize() && (
                            <Text variant="body-sm" className="text-accent-red">
                                Tamanho do arquivo ultrapassa o máximo
                            </Text>
                        )}
                        {error && (
                            <Text variant="body-sm" className="text-accent-red">
                                Erro no campo
                            </Text>
                        )}
                    </div>
                </>
            ) : (
                <div
                    className={`
                        flex gap-3 items-center border border-solid
                        border-border-active mt-5 p-3 rounded 
                    `}
                >
                    <div className="flex flex-col">
                        <div className="truncate max-w-80">
                            <Text
                                variant="body-md"
                                className="text-placeholder"
                            >
                                {formFile.name}
                            </Text>
                        </div>
                        <div className="flex">
                            <button
                                type="button"
                                className="text-accent-red cursor-pointer hover:underline"
                                onClick={() => {
                                    form?.setValue(name, undefined);
                                }}
                            >
                                Remover
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
