import { useQuery } from "@tanstack/react-query";
import { fetcher } from "../../../helpers/api";
import type { Refund } from "../models/refund";

interface UseRefundParams {
    search: string;
    page?: number;
}

export default function useRefunds({ search, page = 1 }: UseRefundParams) {
    const { data, isLoading } = useQuery<{
        refunds: {
            meta: {
                total: number;
                perPage: number;
                currentPage: number;
                lastPage: number;
            };
            data: Refund[];
        };
    }>({
        queryKey: ["refunds", search, page],
        queryFn: () => {
            const params = new URLSearchParams();
            if (search) params.append("q", search);
            params.append("page", String(page));

            return fetcher(`/refunds?${params.toString()}`);
        },
    });

    return {
        refunds: data?.refunds?.data ?? [],
        meta: data?.refunds?.meta,
        isLoadingRefunds: isLoading,
    };
}
