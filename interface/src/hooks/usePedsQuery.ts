import { useQuery } from '@tanstack/react-query';
import { Peds } from '../api/products/peds';
import {PedsType } from '../interface/Products-interface';

export const usePedsQuery = () => { // Cache Query da API
  return useQuery<PedsType[]>({
    queryFn: Peds.getJsonDataAPI,
    queryKey: ['peds'],
    staleTime: 180000, // 3 minutos
    enabled:true,
    retry:3, 
  });
};