import Card from "../components/card";
import Text from "../components/text";
import RefoundFilterList from "../contexts/refound/components/refound-filter-list";

export default function PageHome() {
    return (
        <Card size="lg" className="gap-4">
            <div className="pb-6">
                <Text variant="heading-lg-bold">Solicitações</Text>
            </div>
            <RefoundFilterList />
        </Card>
    );
}
