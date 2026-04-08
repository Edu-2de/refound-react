import { useQuery } from "@tanstack/react-query";
import { fetcher } from "../../../helpers/api";
import type { Refund } from "../models/refund";

export default function useRefunds(search: string = "") {
    const { data, isLoading } = useQuery<{
        refunds: {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            meta: any;
            data: Refund[];
        };
    }>({
        queryKey: ["refunds", search],
        queryFn: () => fetcher(`/refunds${search ? `?q=${search}` : ""}`),
    });

    return {
        refunds: data?.refunds?.data ?? [],
        isLoadingRefounds: isLoading,
    };
}
