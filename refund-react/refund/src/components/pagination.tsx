import type React from "react";
import ArrowLeftIcon from "../assets/icons/CaretLeft.svg?react";
import ArrowRightIcon from "../assets/icons/CaretRight.svg?react";
import ButtonIcon from "./button-icon";
import Text from "./text";

interface PaginationProps extends React.ComponentProps<"nav"> {
    currentPage: number;
    totalPages: number;
    onPageChange: (newPage: number) => void;
}

export default function Pagination({
    currentPage,
    totalPages,
    onPageChange,
}: PaginationProps) {
    return (
        <nav
            aria-label="Paginação"
            className="flex items-center gap-2 max-w-26.5"
        >
            <ButtonIcon
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
                icon={ArrowLeftIcon}
                ariaLabel="previous"
                size="sm"
            />
            <div className="flex-1 text-center">
                <Text variant="body-md">
                    {currentPage}/{totalPages}
                </Text>
            </div>

            <ButtonIcon
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
                icon={ArrowRightIcon}
                ariaLabel="next"
                size="sm"
            />
        </nav>
    );
}
