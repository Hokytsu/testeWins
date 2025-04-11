export interface ApiErrorInterface extends Error{
    status?: number;   
    details?: any;    
  }
  
export interface ApiErrorResponseInterface {
    message?: string;
    status?: number;
    details?: any;
  }
 
