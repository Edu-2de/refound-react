import { useEffect, useState } from "react";
import Card from "../components/card";
import Text from "../components/text";
import RefundFilterList from "../contexts/refund/components/refund-filter-list";
import useRefunds from "../contexts/refund/hooks/use-refunds";

export default function PageHome() {
    const [searchInput, setSearchInput] = useState("");
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const { refunds, meta, isLoadingRefunds } = useRefunds({
        search,
        page: currentPage,
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            setSearch(searchInput);
            setCurrentPage(1);
        }, 500);

        return () => clearTimeout(timer);
    }, [searchInput]);

    return (
        <Card size="lg" className="gap-4">
            <div className="pb-6">
                <Text variant="heading-lg-bold">Solicitações</Text>
            </div>
            <RefundFilterList
                meta={meta}
                refunds={refunds}
                isLoadingRefunds={isLoadingRefunds}
                searchInput={searchInput}
                setSearchInput={setSearchInput}
                setCurrentPage={setCurrentPage}
            />
        </Card>
    );
}
