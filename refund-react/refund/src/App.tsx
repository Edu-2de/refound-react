import Button from "./components/button";
import Icon from "./components/icon";
import Text from "./components/text";

import BedIcon from "./assets/icons/Bed.svg?react";
import ArrowLeftIcon from "./assets/icons/CaretLeft.svg?react";
import ArrowRightIcon from "./assets/icons/CaretRight.svg?react";
import CloudIcon from "./assets/icons/CloudArrowUp.svg?react";
import DesktopIcon from "./assets/icons/DesktopTower.svg?react";
import ForkKnifeIcon from "./assets/icons/ForkKnife.svg?react";
import MagnifyingGlassIcon from "./assets/icons/MagnifyingGlass.svg?react";
import PoliceCarIcon from "./assets/icons/PoliceCar.svg?react";
import ReceiptIcon from "./assets/icons/Receipt.svg?react";
import WrenchIcon from "./assets/icons/Wrench.svg?react";
import CircleIcon from "./assets/icons/circle-notch.svg?react";
import ButtonIcon from "./components/button-icon";
import Card from "./components/card";
import Header from "./components/header";
import InputSelect from "./components/input-select";
import InputText from "./components/input-text";
import NavLink from "./components/navlink";
import SolicitationLine from "./components/solicitation-line";

function App() {
    return (
        <main className="flex flex-col gap-8 items-center py-10 px-4 w-full min-h-screen">
            <section className="w-full max-w-5xl flex flex-col gap-4 border border-gray-300 p-6 rounded-xl">
                <Text
                    variant="heading-sm-bold"
                    className="text-green-100 border-b border-gray-300 pb-2"
                >
                    1. Tipografia
                </Text>

                <div className="flex flex-wrap gap-5 items-end">
                    <Text variant="body-xs" className="text-gray-200">
                        NOME DA SOLICITAÇÃO
                    </Text>
                    <Text variant="body-sm" className="text-gray-200">
                        Alimentação
                    </Text>
                    <Text className="text-gray-200">
                        Dados da despesa para solicitar reembolso.
                    </Text>
                    <Text
                        variant="heading-sm-semibold"
                        className="text-green-100"
                    >
                        Solicitações de reembolso
                    </Text>
                    <Text variant="heading-sm-bold" className="text-gray-100">
                        Tamires
                    </Text>
                    <Text variant="heading-lg-bold" className="text-gray-100">
                        Solicitações
                    </Text>
                </div>
            </section>

            <section className="w-full max-w-5xl flex flex-col gap-4 border border-gray-300 p-6 rounded-xl">
                <Text
                    variant="heading-sm-bold"
                    className="text-green-100 border-b border-gray-300 pb-2"
                >
                    2. Botões (Interações)
                </Text>

                <div className="flex flex-wrap gap-5 items-center">
                    <Button size="sm">Confirmar</Button>
                    <Button size="md">Nova Solicitação</Button>
                    <Button size="lg">Enviar</Button>
                </div>
            </section>

            <section className="w-full max-w-5xl flex flex-col gap-4 border border-gray-300 p-6 rounded-xl">
                <Text
                    variant="heading-sm-bold"
                    className="text-green-100 border-b border-gray-300 pb-2"
                >
                    2. Botões (Inativos)
                </Text>

                <div className="flex flex-wrap gap-5 items-center">
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
            </section>

            <section className="w-full max-w-5xl flex flex-col gap-4 border border-gray-300 p-6 rounded-xl">
                <Text
                    variant="heading-sm-bold"
                    className="text-green-100 border-b border-gray-300 pb-2"
                >
                    3. Ícones
                </Text>
                <div className="flex flex-wrap gap-5 items-end">
                    <Icon
                        fill="white"
                        className="h-6 w-6"
                        svg={CircleIcon}
                        animate
                    />
                    <Icon fill="white" className="h-6 w-6" svg={BedIcon} />
                    <Icon
                        fill="white"
                        className="h-6 w-6"
                        svg={ArrowLeftIcon}
                    />
                    <Icon
                        fill="white"
                        className="h-6 w-6"
                        svg={ArrowRightIcon}
                    />
                    <Icon fill="white" className="h-6 w-6" svg={CloudIcon} />
                    <Icon fill="white" className="h-6 w-6" svg={DesktopIcon} />
                    <Icon
                        fill="white"
                        className="h-6 w-6"
                        svg={ForkKnifeIcon}
                    />
                    <Icon
                        fill="white"
                        className="h-6 w-6"
                        svg={MagnifyingGlassIcon}
                    />
                    <Icon
                        fill="white"
                        className="h-6 w-6"
                        svg={PoliceCarIcon}
                    />
                    <Icon fill="white" className="h-6 w-6" svg={ReceiptIcon} />
                    <Icon fill="white" className="h-6 w-6" svg={WrenchIcon} />
                </div>
            </section>

            <section className="w-full max-w-5xl flex flex-col gap-4 border border-gray-300 p-6 rounded-xl">
                <Text
                    variant="heading-sm-bold"
                    className="text-green-100 border-b border-gray-300 pb-2"
                >
                    4. Botoes com ícone
                </Text>
                <div className="flex flex-wrap gap-5 items-end">
                    <ButtonIcon
                        ariaLabel="Teste"
                        handling
                        icon={MagnifyingGlassIcon}
                    />
                    <ButtonIcon
                        ariaLabel="Teste"
                        disabled
                        icon={MagnifyingGlassIcon}
                    />

                    <ButtonIcon ariaLabel="Teste" icon={MagnifyingGlassIcon} />
                    <ButtonIcon ariaLabel="Teste" icon={ArrowLeftIcon} />
                    <ButtonIcon ariaLabel="Teste" icon={ArrowRightIcon} />
                    <ButtonIcon ariaLabel="Teste" icon={CloudIcon} />
                </div>
            </section>

            <section className="w-full max-w-5xl flex flex-col gap-4 border border-gray-300 p-6 rounded-xl">
                <Text
                    variant="heading-sm-bold"
                    className="text-green-100 border-b border-gray-300 pb-2"
                >
                    5. Inputs
                </Text>
                <div className="flex flex-wrap gap-5 items-end ">
                    <InputText
                        title="NOME DA SOLICITAÇÃO"
                        placeholder="digite aqui"
                    />

                    <InputSelect title="CATEGORIAS" />
                </div>
            </section>

            <section className="w-full max-w-5xl flex flex-col gap-4 border border-gray-300 p-6 rounded-xl">
                <Text
                    variant="heading-sm-bold"
                    className="text-green-100 border-b border-gray-300 pb-2"
                >
                    6. Links
                </Text>
                <div className="flex flex-wrap gap-5 items-end">
                    <NavLink to="/">Teste</NavLink>
                    <NavLink to="/Inicio">Inicio</NavLink>
                    <NavLink to="/Componentes">Componentes</NavLink>
                </div>
            </section>

            <section className="w-full max-w-5xl flex flex-col gap-4 border border-gray-300 p-6 rounded-xl">
                <Text
                    variant="heading-sm-bold"
                    className="text-green-100 border-b border-gray-300 pb-2"
                >
                    7. Header
                </Text>
                <div className="flex flex-wrap gap-5 items-end">
                    <Header />
                </div>
            </section>

            <section className="w-full max-w-5xl flex flex-col gap-4 border border-gray-300 p-6 rounded-xl">
                <Text
                    variant="heading-sm-bold"
                    className="text-green-100 border-b border-gray-300 pb-2"
                >
                    8. Card
                </Text>
                <div className="flex flex-wrap gap-5 items-end">
                    <Card size="lg"></Card>
                </div>
            </section>

            <section className="w-full max-w-5xl flex flex-col gap-4 border border-gray-300 p-6 rounded-xl">
                <Text
                    variant="heading-sm-bold"
                    className="text-green-100 border-b border-gray-300 pb-2"
                >
                    9. Linha de solicitação
                </Text>
                <div className="flex flex-wrap gap-5 items-end">
                    <Card size="lg">
                        <SolicitationLine
                            category="Alimentação"
                            name="Rodrigo"
                            amount="34,78"
                        />
                    </Card>
                </div>
            </section>
        </main>
    );
}

export default App;
