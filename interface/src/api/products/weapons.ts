import { WeaponsInterface } from '../../interface/productsInterface';
import { winsAPI } from '../winsAPIAxiosConfig';

  export const Weapons = { //Geralmente eu crio um arquivo de exportação um nivel acima centralizando tudo, mas como são só 3 produtos, vou deixar aqui msm o export.
  getJsonDataAPI: async () => { //Consulta a API /weapons
    const response:WeaponsInterface = await winsAPI.get('/weapons');
    return response.data;
  }
};

