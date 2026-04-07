import React from "react";
import { useForm } from "react-hook-form";
import Card from "../components/card";
import InputSelect from "../components/input-select";
import InputSingleFile from "../components/input-single-file";
import InputText from "../components/input-text";
import Text from "../components/text";

export default function PageNewRefound() {
    const form = useForm({
        defaultValues: {
            nomeDaSolicitacao: "",
            categoria: "",
            valorInCents: 0,
            comprovante: undefined,
        },
    });
    const [valueInCents, setValueInCents] = React.useState(0);

    const handleConvertNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        const textoLimpo = e.target.value.replace(/\D/g, "");
        const num = Number(textoLimpo);

        setValueInCents(num);
    };

    const displayValue = new Intl.NumberFormat("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(valueInCents / 100);

    return (
        <Card className="gap-9">
            <form className="flex flex-col gap-9">
                <div className="flex flex-col gap-4">
                    <Text variant="heading-lg-bold">
                        Nova solicitação de reembolso
                    </Text>
                    <Text variant="body-md" className="text-gray-200">
                        Dados da despesa para solicitar reembolso.{" "}
                    </Text>
                </div>
                <div className="flex flex-col gap-6">
                    <InputText title="NOME DA SOLICITAÇÃO" />

                    <div className="flex flex-row gap-4">
                        <InputSelect className="flex-1" title="CATEGORIA" />
                        <InputText
                            className="w-40"
                            title="VALOR"
                            placeholder="0,00"
                            value={displayValue}
                            onChange={handleConvertNumber}
                        />
                    </div>

                    <InputSingleFile
                        size="xs"
                        form={form}
                        maxFileSizeInMB={50}
                        allowedExtensions={["pdf"]}
                    />
                </div>
            </form>
        </Card>
    );
}
