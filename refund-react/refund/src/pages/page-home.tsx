import ButtonIcon from "../components/button-icon";
import Card from "../components/card";
import InputText from "../components/input-text";
import Text from "../components/text";

import SearchIcon from "../assets/icons/MagnifyingGlass.svg?react";
import Pagination from "../components/pagination";
import RefoundLine from "../components/refound-line";

export default function PageHome() {
    return (
        <Card size="lg" className="gap-4">
            <div className="pb-6">
                <Text variant="heading-lg-bold">Solicitações</Text>
            </div>
            <div className="flex flex-row gap-4 border-b-2 border-gray-500 pb-4 rounded">
                <InputText
                    title="PESQUISA PELO NOME"
                    placeholder="Pesquisar pelo nome"
                    className="flex-1"
                />
                <ButtonIcon ariaLabel="BOTÃO DE PESQUISAR" icon={SearchIcon} />
            </div>
            <div className="flex flex-col mt-4 gap-6 pb-8">
                <RefoundLine
                    category="Alimentação"
                    name="Rodrigo"
                    amount="34,78"
                />
                <RefoundLine
                    category="Hospedagem"
                    name="Leticia"
                    amount="50,00"
                />
            </div>
            <div className="flex items-center justify-center">
                <Pagination
                    onPageChange={() => ""}
                    currentPage={1}
                    totalPages={3}
                />
            </div>
        </Card>
    );
}
