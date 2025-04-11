import { PedsInterface } from '../../interface/productsInterface';
import { winsAPI } from '../winsAPIAxiosConfig';

export const Peds = { //Geralmente eu crio um arquivo de exportação um nivel acima centralizando tudo, mas como são só 3 produtos, vou deixar aqui msm o export.
  getJsonDataAPI: async () => { //Consulta a API /peds
    const response:PedsInterface = await winsAPI.get('/peds');
    return response.data;
  }
};

