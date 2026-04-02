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
        <nav aria-label="Paginação" className="flex items-center gap-4">
            <ButtonIcon
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
                icon={ArrowLeftIcon}
                ariaLabel="previous"
            />
            <Text variant="body-md">
                {currentPage} / {totalPages}
            </Text>
            <ButtonIcon
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
                icon={ArrowRightIcon}
                ariaLabel="next"
            />
        </nav>
    );
}
