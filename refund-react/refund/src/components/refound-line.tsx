import cv from "classnames";
import BedIcon from "../assets/icons/Bed.svg?react";
import KnifeIcon from "../assets/icons/ForkKnife.svg?react";
import CarIcon from "../assets/icons/PoliceCar.svg?react";
import Icon from "./icon";
import Text from "./text";

const iconsVariation = {
    Alimentação: {
        icon: KnifeIcon,
    },
    Hospedagem: {
        icon: BedIcon,
    },
    Transporte: {
        icon: CarIcon,
    },
};

type Category = keyof typeof iconsVariation;

interface RefoundLineProps extends React.ComponentProps<"div"> {
    category: Category;
    name: string;
    amount: string;
}

export default function RefoundLine({
    category,
    name,
    amount,
    className,
    ...props
}: RefoundLineProps) {
    const CurrentIcon = iconsVariation[category].icon;
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
                        svg={CurrentIcon}
                    />
                </div>

                <div className="flex flex-col">
                    <Text variant="heading-sm-bold">{name}</Text>
                    <Text variant="body-sm">{category}</Text>
                </div>
            </div>

            <div className="flex flex-row gap-1 items-center">
                <Text variant="body-sm">R$</Text>
                <Text variant="heading-sm-semibold">{amount}</Text>
            </div>
        </div>
    );
}
