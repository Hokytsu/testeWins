import { UniformsInterface } from '../../interface/productsInterface';
import { winsAPI } from '../winsAPIConfig';

export const Uniform = {
  getJsonData: async () => {
    const response:UniformsInterface = await winsAPI.get('/uniforms');
    return response.data;
  },
  getImagebyName: async (name:string) => {
    const response = await winsAPI.get(`/uniforms/${name}`); // acabei de perceber que criei um func para retornar a url da img e n to usando ela aqui
    return response.data;
  }
};

