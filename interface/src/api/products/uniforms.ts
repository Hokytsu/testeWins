import { UniformsInterface } from '../../interface/Products-interface';
import { winsAPI } from '../axios-config';

export const Uniforms = { //Geralmente eu crio um arquivo de exportação um nivel acima centralizando tudo, mas como são só 3 produtos, vou deixar aqui msm o export. 
  getJsonDataAPI: async () => { //Consulta a API /uniforms
    const response:UniformsInterface = await winsAPI.get('/uniforms');
    return response.data;
  }
};

