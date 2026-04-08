import type React from "react";
import SearchIcon from "../../../assets/icons/MagnifyingGlass.svg?react";
import ButtonIcon from "../../../components/button-icon";
import InputText from "../../../components/input-text";
import Pagination from "../../../components/pagination";
import RefundLine from "../../../components/refund-line";
import type { Refund } from "../models/refund";

interface RefundFilterListProps {
    refunds: Refund[];
    isLoadingRefounds: boolean;
    searchInput: string;
    setSearchInput: React.Dispatch<React.SetStateAction<string>>;
}

export default function RefundFilterList({
    refunds,
    isLoadingRefounds,
    searchInput,
    setSearchInput,
}: RefundFilterListProps) {
    return (
        <>
            <div className="flex flex-row gap-4 border-b-2 border-gray-500 pb-4 rounded">
                <InputText
                    title=""
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    className="flex-1"
                    placeholder="Pesquisar pelo Nome"
                />
                <ButtonIcon ariaLabel="Pesquisar" icon={SearchIcon} />
            </div>

            {isLoadingRefounds && <p>Carregando...</p>}

            <div className="flex flex-col mt-4 gap-6 pb-8">
                {refunds.map((refound) => (
                    <RefundLine
                        key={refound.id}
                        category={
                            refound.category as
                                | "food"
                                | "hosting"
                                | "transport"
                                | "services"
                                | "other"
                        }
                        name={refound.title}
                        amount={(refound.value / 100).toLocaleString("pt-BR", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                        })}
                    />
                ))}
            </div>
            <div className="flex items-center justify-center">
                <Pagination
                    onPageChange={() => ""}
                    currentPage={1}
                    totalPages={3}
                />
            </div>
        </>
    );
}
