import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";
import {
  ApiErrorInterface,
  ApiErrorResponseInterface,
} from  "../interface/API-interface.ts";

// Configuração da consula a API.
export const winsAPI: AxiosInstance = axios.create({ 
  baseURL: "https://winsapi.discloud.app/dev/products", // Focado somente para esse teste.
  timeout: 7000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Interceptador de erros Default para REST APIs.  TODO: Melhorar o tratamento de erros para algo mais personalizado
winsAPI.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError<ApiErrorResponseInterface>) => {
    const requestInfo = {
      url: error.config?.url || "URL desconhecida",
      method: error.config?.method || "Método não especificado",
    };
    if (error.response) {
      const { status, data } = error.response;
      const apiError: ApiErrorInterface = {
        ...new Error(data.message || `Erro HTTP ${status}`),
        name: "APIError",
        details: data.details || data,
        status: status,
      };
      console.error(
        `Erro ${status} em ${requestInfo.method} ${requestInfo.url}:`,
        data
      );
      return Promise.reject(apiError);
    }
    if (error.request) {
      console.error("Servidor não respondeu:", requestInfo);
      return Promise.reject(
        new Error("Servidor não respondeu, verifique a sua conexão.")
      );
    }
    console.error("Erro em sua request:", error.message, requestInfo);
    return Promise.reject(error);
  }
);
const httpErrorMessages: Record<number, string> = {
  400: "Dados inválidos",
  401: "Acesso não autorizado",
  403: "Você não tem permissão",
  404: "Recurso não encontrado",
  500: "Erro interno no servidor",
  503: "Serviço temporariamente indisponível",
  504: "Tempo de resposta excedido",
};

// Obtem a messagem de erro de httpErrorMessages
function getHttpErrorDescription(status: number) {
  return httpErrorMessages[status] || "Boa sorte em achar o que foi que deu erro :)";
}
