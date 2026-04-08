import { useQuery } from "@tanstack/react-query";
import { fetcher } from "../../../helpers/api";
import type { Refound } from "../models/refound";

export default function useRefounds() {
    const { data, isLoading } = useQuery<Refound[]>({
        queryKey: ["refounds"],
        queryFn: () => fetcher("/refunds"),
    });

    return {
        refounds: Array.isArray(data) ? data : [],
        isLoadingRefounds: isLoading,
    };
}
