import { useState } from "react";
import useRefounds from "../hooks/use-refounds";
// ... imports de Input, Botões, RefoundLine, etc.
import ButtonIcon from "../../../components/button-icon";

import SearchIcon from "../../../assets/icons/MagnifyingGlass.svg?react";
import InputText from "../../../components/input-text";
import Pagination from "../../../components/pagination";
import RefoundLine from "../../../components/refound-line";
export default function RefoundFilterList() {
    const { refounds, isLoadingRefounds } = useRefounds();

    const [search, setSearch] = useState("");

    const refoundFilter = refounds.filter((refound) => {
        return refound.title.toLowerCase().includes(search.toLowerCase());
    });

    console.log("1. DADOS QUE CHEGARAM DA API:", refounds);
    console.log("2. O QUE EU ESTOU DIGITANDO:", search);

    return (
        <>
            <div className="flex flex-row gap-4 border-b-2 border-gray-500 pb-4 rounded">
                <InputText
                    title=""
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="flex-1"
                    placeholder="Pesquisar pelo Nome"
                />
                <ButtonIcon ariaLabel="Pesquisar" icon={SearchIcon} />
            </div>

            <div className="flex flex-col mt-4 gap-6 pb-8">
                {refoundFilter.map((refound) => (
                    <RefoundLine
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
