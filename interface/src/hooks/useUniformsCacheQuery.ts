import { useQuery } from '@tanstack/react-query';
import { Uniforms } from '../api/products/uniforms';
import {UniformsType } from '../interface/productsInterface';

export const useUniformsQuery = () => {
  return useQuery<UniformsType[]>({
    queryFn: Uniforms.getJsonDataAPI,
    queryKey: ['uniforms'],
    staleTime: 120000,// 3 minutos
    enabled:true,
    retry:3, 
  });
};