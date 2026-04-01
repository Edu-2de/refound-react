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
import InputText from "./components/input-text";
import NavLink from "./components/navlink";

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

            <div className="flex flex-row gap-5">
                <Button size="sm">Confirmar</Button>
                <Button size="md">Nova Solicitação</Button>
                <Button size="lg">Enviar</Button>
            </div>

            <div className="flex flex-row gap-5">
                <Button handling size="sm">
                    Confirmar
                </Button>
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

            <div className="flex flex-row gap-5 bg-green-100 p-6 rounded-lg">
                <Icon
                    fill="white"
                    className="h-6 w-6"
                    svg={CircleIcon}
                    animate
                />
                <Icon fill="white" className="h-6 w-6" svg={BedIcon} />
                <Icon fill="white" className="h-6 w-6" svg={ArrowLeftIcon} />
                <Icon fill="white" className="h-6 w-6" svg={ArrowRightIcon} />
                <Icon fill="white" className="h-6 w-6" svg={CloudIcon} />
                <Icon fill="white" className="h-6 w-6" svg={DesktopIcon} />
                <Icon fill="white" className="h-6 w-6" svg={ForkKnifeIcon} />
                <Icon
                    fill="white"
                    className="h-6 w-6"
                    svg={MagnifyingGlassIcon}
                />
                <Icon fill="white" className="h-6 w-6" svg={PoliceCarIcon} />
                <Icon fill="white" className="h-6 w-6" svg={ReceiptIcon} />
                <Icon fill="white" className="h-6 w-6" svg={WrenchIcon} />
            </div>

            <div className="flex flex-row gap-5">
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

            <div className="flex gap-5">
                <InputText
                    title="NOME DA SOLICITAÇÃO"
                    placeholder="digite aqui"
                    className="w-100 h-13"
                />
            </div>

            <div className="flex gap-5">
                <NavLink to="/">Teste</NavLink>
            </div>
        </div>
    );
}

export default App;
