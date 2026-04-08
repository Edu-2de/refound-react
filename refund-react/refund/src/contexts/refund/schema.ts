import { z } from "zod";
import { REFUND_CATEGORIES } from "./constants/refund-categories";

type CategoryKey = Extract<keyof typeof REFUND_CATEGORIES, string>;
const CategoryEnum = Object.keys(REFUND_CATEGORIES) as [
    CategoryKey,
    ...CategoryKey[],
];

export const refoundNewFormSchema = z.object({
    title: z.string().min(1, { message: "Campo obrigatório" }).max(255),
    category: z.enum(CategoryEnum, {
        message: "Categoria inválida",
    }),
    value: z.number().positive({ message: "O valor deve ser maior que zero" }),
    receipt: z.instanceof(File, { message: "O comprovante é obrigatório" }),
});

export type RefoundNewFormSchema = z.infer<typeof refoundNewFormSchema>;
