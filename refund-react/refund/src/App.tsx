import Text from "./components/text";

function App() {
    return (
        <div className="flex flex-col gap-10 items-center mt-10">
            <div className="flex flex-row gap-5 items-center justify-center">
                <Text variant="body-xs" className="text-gray-200">
                    NOME DA SOLICITAÇÃO
                </Text>
                <Text variant="body-sm" className="text-gray-200">
                    Teste
                </Text>
                <Text className="text-gray-200">Teste</Text>
                <Text variant="heading-sm-semibold" className="text-gray-200">
                    Teste
                </Text>
                <Text variant="heading-sm-bold" className="text-gray-100">
                    Teste
                </Text>
                <Text variant="heading-lg-bold" className="text-gray-100">
                    Teste
                </Text>
            </div>
        </div>
    );
}

export default App;
