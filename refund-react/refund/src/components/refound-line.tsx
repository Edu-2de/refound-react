import cv from "classnames";
import BedIcon from "../assets/icons/Bed.svg?react";
import DesktopIcon from "../assets/icons/DesktopTower.svg?react";
import KnifeIcon from "../assets/icons/ForkKnife.svg?react";
import CarIcon from "../assets/icons/PoliceCar.svg?react";
import WrenchIcon from "../assets/icons/Wrench.svg?react";

import Icon from "./icon";
import Text from "./text";

const iconsVariation = {
    food: {
        icon: KnifeIcon,
        title: "Alimentação",
    },
    hosting: {
        icon: BedIcon,
        title: "Hospedagem",
    },
    transport: {
        icon: CarIcon,
        title: "Transporte",
    },
    // Adiciona estas duas linhas!
    services: {
        icon: WrenchIcon,
        title: "Serviços",
    },
    other: {
        icon: DesktopIcon,
        title: "Outros",
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
    const CurrentTitle = iconsVariation[category].title;
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
                    <Text variant="body-sm">{CurrentTitle}</Text>
                </div>
            </div>

            <div className="flex flex-row gap-1 items-center">
                <Text variant="body-sm">R$</Text>
                <Text variant="heading-sm-semibold">{amount}</Text>
            </div>
        </div>
    );
}
