import Button from "./components/button";
import Text from "./components/text";

function App() {
    return (
        <div className="flex flex-col gap-10 items-center mt-10">
            <div className="flex flex-row gap-5 items-center justify-center">
                <Text variant="body-xs" className="text-gray-200">
                    NOME DA SOLICITAÇÃO
                </Text>
                <Text variant="body-sm" className="text-gray-200">
                    Alimentação
                </Text>
                <Text className="text-gray-200">
                    Dados da despesa para solicitar reembolso.
                </Text>
                <Text variant="heading-sm-semibold" className="text-green-100">
                    Solicitações de reembolso
                </Text>
                <Text variant="heading-sm-bold" className="text-gray-100">
                    Tamires
                </Text>
                <Text variant="heading-lg-bold" className="text-gray-100">
                    Solicitações
                </Text>
            </div>

            <div className="flex flex-row gap-10">
                <Button size="sm">Confirmar</Button>
                <Button size="md">Nova Solicitação</Button>
                <Button size="lg">Enviar</Button>
            </div>

            <div className="flex flex-row gap-10">
                <Button disabled size="sm">
                    Confirmar
                </Button>
                <Button disabled size="md">
                    Nova Solicitação
                </Button>
                <Button disabled size="lg">
                    Enviar
                </Button>
            </div>
        </div>
    );
}

export default App;
