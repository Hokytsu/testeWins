import { useQuery } from '@tanstack/react-query';
import { Weapons } from '../api/products/weapons';
import {WeaponsType } from '../interface/Products-interface';

export const useWeaponsQuery = () => { // Cache Query da API
  return useQuery<WeaponsType[]>({
    queryFn: Weapons.getJsonDataAPI,
    queryKey: ['weapons'],
    staleTime: 180000,// 3 minutos
    enabled:true,
    retry:3, 
  });
};