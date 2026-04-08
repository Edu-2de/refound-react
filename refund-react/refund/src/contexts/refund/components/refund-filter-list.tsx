import SearchIcon from "../../../assets/icons/MagnifyingGlass.svg?react";
import ButtonIcon from "../../../components/button-icon";
import InputText from "../../../components/input-text";
import Pagination from "../../../components/pagination";
import RefundLine from "../../../components/refund-line";
import type { Refund } from "../models/refund";

interface RefundFilterListProps {
    refunds: Refund[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    meta: any;
    isLoadingRefunds: boolean;
    searchInput: string;
    setSearchInput: (value: string) => void;
    setCurrentPage: (value: number) => void;
}

export default function RefundFilterList({
    refunds,
    meta,
    isLoadingRefunds,
    searchInput,
    setSearchInput,
    setCurrentPage,
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

            {isLoadingRefunds && <p>Carregando...</p>}

            <div className="flex flex-col mt-4 gap-6 pb-8">
                {refunds.map((refund) => (
                    <RefundLine
                        key={refund.id}
                        category={
                            refund.category as
                                | "food"
                                | "hosting"
                                | "transport"
                                | "services"
                                | "other"
                        }
                        name={refund.title}
                        amount={(refund.value / 100).toLocaleString("pt-BR", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                        })}
                    />
                ))}
            </div>
            <div className="flex items-center justify-center">
                {meta && (
                    <Pagination
                        onPageChange={setCurrentPage}
                        currentPage={meta.currentPage}
                        totalPages={meta.lastPage}
                    />
                )}
            </div>
        </>
    );
}
