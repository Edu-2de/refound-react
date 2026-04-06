import { tv, type VariantProps } from "tailwind-variants";
import Text from "./text";

export const inputVariants = tv({
    slots: {
        container: "flex flex-col gap-2 group",
        label: "text-gray-200 group-focus-within:text-green-100 group-focus-within:font-bold transition-all ",
        wrapper:
            "border-2 border-solid border-gray-400 focus-within:border-green-100 bg-transparent rounded-lg flex items-center w-full min-w-40 px-4",
        input: "bg-transparent outline-none placeholder:text-gray-200 flex-1 w-full text-gray-100 caret-green-100",
    },
    variants: {
        size: {
            sm: {
                wrapper: " py-2.5",
            },
            md: {
                wrapper: " py-4",
            },
            lg: {
                wrapper: " py-6",
            },
        },
    },
    defaultVariants: {
        size: "sm",
    },
});

interface InputRootProps extends React.ComponentProps<"div"> {}
function InputRoot({ className, children, ...props }: InputRootProps) {
    const { container } = inputVariants();
    return (
        <div className={container({ className })} {...props}>
            {children}
        </div>
    );
}

interface InputLabelProps extends React.ComponentProps<"label"> {}
function InputLabel({ className, children, ...props }: InputLabelProps) {
    const { label } = inputVariants();
    return (
        <Text
            variant="body-xs"
            className={label({ className })}
            as="label"
            {...props}
        >
            {children}
        </Text>
    );
}

interface InputWrapperProps
    extends React.ComponentProps<"div">, VariantProps<typeof inputVariants> {}
function InputWrapper({
    className,
    size,
    children,
    ...props
}: InputWrapperProps) {
    const { wrapper } = inputVariants({ size });
    return (
        <div className={wrapper({ className })} {...props}>
            {children}
        </div>
    );
}

interface InputFieldProps extends React.ComponentProps<"input"> {}
function InputField({ className, type = "text", ...props }: InputFieldProps) {
    const { input } = inputVariants();
    return <input type={type} className={input({ className })} {...props} />;
}

export const Input = {
    Root: InputRoot,
    Label: InputLabel,
    Wrapper: InputWrapper,
    Field: InputField,
};
