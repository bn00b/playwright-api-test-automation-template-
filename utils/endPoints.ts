import { ENV } from './env';

/**
 * This is the api endpoints definition.
 */
export const endPoints = {
    // Define Endpoint this way
    // login_endpoint: '/api/v1/user/login'
    // userProfile: (userId:string) => `/api/v1/user/${userId}/profile`
    // searchUsers: (query:string) => `/api/v1/users/search?q=${query}`
};

export const getFullUrl = (endpoint: string): string => {
  return `${ENV.URL}${endpoint}`;
};