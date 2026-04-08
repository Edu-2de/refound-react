import cv from "classnames";
import { REFUND_CATEGORIES } from "../contexts/refund/constants/refund-categories";

import Icon from "./icon";
import Text from "./text";

type Category = keyof typeof REFUND_CATEGORIES;

interface RefundLineProps extends React.ComponentProps<"div"> {
    category: Category;
    name: string;
    amount: string;
}

export default function RefundLine({
    category,
    name,
    amount,
    className,
    ...props
}: RefundLineProps) {
    const categoryData = REFUND_CATEGORIES[category];

    return (
        <div
            className={cv(
                "flex items-center justify-between w-full",
                className,
            )}
            {...props}
        >
            <div className="flex flex-row gap-3">
                <div className="flex items-center justify-center w-8.5 h-8.5 rounded-full bg-gray-400">
                    <Icon
                        className="fill-green-100 w-4.5 h-4.5"
                        svg={categoryData.icon}
                    />
                </div>

                <div className="flex flex-col">
                    <Text variant="heading-sm-bold">{name}</Text>
                    <Text variant="body-sm">{categoryData.label}</Text>
                </div>
            </div>

            <div className="flex flex-row gap-1 items-center">
                <Text variant="body-sm">R$</Text>
                <Text variant="heading-sm-semibold">{amount}</Text>
            </div>
        </div>
    );
}
