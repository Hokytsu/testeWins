import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';
import { ApiErrorInterface, ApiErrorResponseInterface } from '../interface/apiInterface';


// Configuração do Axios
export const winsAPI: AxiosInstance = axios.create({
  baseURL: 'https://wins.company/assets/TesteFrontEnd',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});



// Tratamento de erros Default para REST APIs.
winsAPI.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError<ApiErrorResponseInterface>) => {
    const requestInfo = {
      url: error.config?.url || 'URL desconhecida',
      method: error.config?.method || 'Método não especificado'
    };
    if (error.response) {
      const { status, data } = error.response;
      const apiError: ApiErrorInterface = {
        ...new Error(data.message || `Erro HTTP ${status}`), 
        name: 'APIError',
        status: status,
        details: data.details || data
      };
      console.error(`Erro ${status} em ${requestInfo.method} ${requestInfo.url}:`, data);
      return Promise.reject(apiError);
    }
    if (error.request) {
      console.error('Servidor não respondeu:', requestInfo);
      return Promise.reject(new Error('Servidor não respondeu. Verifique sua conexão.'));
    }
    console.error('Erro na requisição:', error.message, requestInfo);
    return Promise.reject(error);
  }
);
const httpErrorMessages: Record<number, string> = {
  400: 'Dados inválidos enviados',
  401: 'Acesso não autorizado',
  403: 'Você não tem permissão',
  404: 'Recurso não encontrado',
  500: 'Erro interno no servidor',
  503: 'Serviço temporariamente indisponível',
  504: 'Tempo de resposta excedido'
};

function getHttpErrorDescription(status: number): string {
  return httpErrorMessages[status] || 'Ocorreu um erro desconhecido';
}