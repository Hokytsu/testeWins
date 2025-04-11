import { useQuery } from '@tanstack/react-query';
import { Weapons } from '../api/products/weapons';
import {WeaponsType } from '../interface/Products-interface';

export const useWeaponsQuery = () => {
  return useQuery<WeaponsType[]>({
    queryFn: Weapons.getJsonDataAPI,
    queryKey: ['weapons'],
    staleTime: 180000,// 3 minutos
    enabled:false,
    retry:3, 
  });
};