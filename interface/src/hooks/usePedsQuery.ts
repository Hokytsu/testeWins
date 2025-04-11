import { useQuery } from '@tanstack/react-query';
import { Peds } from '../api/products/peds';
import {PedsType } from '../interface/Products-interface';

export const usePedsQuery = () => {
  return useQuery<PedsType[]>({
    queryFn: Peds.getJsonDataAPI,
    queryKey: ['peds'],
    staleTime: 120000, // 3 minutos
    enabled:true,
    retry:3, 
  });
};