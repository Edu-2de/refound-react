import BedIcon from "../assets/icons/Bed.svg?react";
import DesktopIcon from "../assets/icons/DesktopTower.svg?react";
import KnifeIcon from "../assets/icons/ForkKnife.svg?react";
import CarIcon from "../assets/icons/PoliceCar.svg?react";
import WrenchIcon from "../assets/icons/Wrench.svg?react";

export type RefundCategory =
    | "food"
    | "hosting"
    | "transport"
    | "services"
    | "other";

export const REFUND_CATEGORIES = {
    food: {
        label: "Alimentação",
        icon: KnifeIcon,
    },
    hosting: {
        label: "Hospedagem",
        icon: BedIcon,
    },
    transport: {
        label: "Transporte",
        icon: CarIcon,
    },
    services: {
        label: "Serviços",
        icon: WrenchIcon,
    },
    other: {
        label: "Outros",
        icon: DesktopIcon,
    },
} as const;
