import apiClient from "@/lib/api-client";
import { Plan } from "@/types/plans";
import { useQuery } from "@tanstack/react-query";

export const getPlans = async (): Promise<{
  data: Record<string, Plan>;
}> => {
  const response = await apiClient.get("/api/plans");
  return response?.data;
};

export const useGetPlans = (enabled = true) => {
  return useQuery({
    queryKey: ["plans"],
    queryFn: getPlans,
    staleTime: 0,
    refetchOnMount: true,
    enabled,
  });
};
