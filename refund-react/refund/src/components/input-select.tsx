import * as Select from "@radix-ui/react-select";
import type { VariantProps } from "tailwind-variants";
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
                <Input.Wrapper className={`p-0 ${wrapperClassName} `}>
                    <Select.Trigger
                        className={wrapper({
                            className:
                                "w-full flex justify-between items-center outline-none bg-transparent text-gray-100 cursor-pointer border-0",
                        })}
                    >
                        <Select.Value placeholder="Selecione" />
                    </Select.Trigger>
                </Input.Wrapper>

                <Select.Content
                    position="popper"
                    sideOffset={8}
                    className="bg-white border border-gray-300 rounded-md p-0 shadow-lg cursor-pointer w-(--radix-select-trigger-width) flex-1 overflow-hidden"
                >
                    <Select.Viewport>
                        <Select.Item
                            value="alimentação"
                            className="p-2 outline-none hover:bg-gray-400 cursor-pointer rounded"
                        >
                            <Select.ItemText>Alimentação</Select.ItemText>
                        </Select.Item>
                        <Select.Item
                            value="medicamento"
                            className="p-2 outline-none hover:bg-gray-400 cursor-pointer rounded"
                        >
                            <Select.ItemText>Medicamento</Select.ItemText>
                        </Select.Item>
                    </Select.Viewport>
                </Select.Content>
            </Select.Root>
        </Input.Root>
    );
}
