import * as Select from "@radix-ui/react-select";
import type { VariantProps } from "tailwind-variants";
import CaretDownIcon from "../assets/icons/CaretDown.svg?react";
import CheckIcon from "../assets/icons/Check.svg?react";
import Icon from "./icon";
import { Input, inputVariants } from "./input";

interface InputSelectProps
    extends
        Omit<React.ComponentProps<"select">, "size">,
        VariantProps<typeof inputVariants> {
    title: string;
    className?: string;
    wrapperClassName?: string;
}

export default function InputSelect({
    className,
    wrapperClassName,
    title,
    size,
}: InputSelectProps) {
    const { wrapper } = inputVariants({ size });

    return (
        <Input.Root className={className}>
            <Input.Label>{title}</Input.Label>

            <Select.Root>
                <Select.Trigger
                    className={wrapper({
                        className: `
                            /* 'group' permite que o ícone lá dentro escute o estado do botão */
                            group w-full flex justify-between items-center outline-none 
                            bg-transparent text-gray-100 cursor-pointer 
                            /* Mantém a borda verde enquanto a lista flutuante estiver aberta! */
                            data-[state=open]:border-green-100 
                            ${wrapperClassName || ""}
                        `,
                    })}
                >
                    <Select.Value placeholder="Selecione" />

                    <Icon
                        svg={CaretDownIcon}
                        className={`
                            fill-gray-300 w-5 h-5 transition-transform duration-300
                            /* 2. O ícone reage ao estado 'open' do grupo (botão pai) */
                            group-data-[state=open]:rotate-180
                            group-data-[state=open]:fill-green-100
                        `}
                    />
                </Select.Trigger>

                <Select.Content
                    position="popper"
                    sideOffset={8}
                    className="bg-white border border-gray-300 rounded-md p-0 shadow-lg cursor-pointer w-(--radix-select-trigger-width) flex-1 overflow-hidden"
                >
                    <Select.Viewport>
                        <Select.Item
                            value="alimentação"
                            className={`
                                flex items-center justify-between py-4 px-2 outline-none cursor-pointer 
                                rounded text-gray-200 hover:bg-gray-400
                                data-[state=checked]:text-gray-100 data-[state=checked]:font-bold 
                            `}
                        >
                            <Select.ItemText>Alimentação</Select.ItemText>

                            <Select.ItemIndicator>
                                <CheckIcon className="w-5 h-5" />
                            </Select.ItemIndicator>
                        </Select.Item>
                    </Select.Viewport>
                </Select.Content>
            </Select.Root>
        </Input.Root>
    );
}
