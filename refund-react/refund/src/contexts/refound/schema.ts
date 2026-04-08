import { z } from "zod";

const CategorySchema = [
    "food",
    "hosting",
    "transport",
    "services",
    "other",
] as const;
export const refoundNewFormSchema = z.object({
    title: z.string().min(1, { message: "Campo obrigatório" }).max(255),
    category: z.enum(CategorySchema),
    value: z.number().positive({ message: "O valor deve ser maior que zero" }),
    receipt: z.instanceof(File, { message: "O comprovante é obrigatório" }),
});

export type RefoundNewFormSchema = z.infer<typeof refoundNewFormSchema>;
