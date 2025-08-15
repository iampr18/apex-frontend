const ACCESS_TOKEN_KEY = 'apex_access_token'
export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN_KEY)
export const setAccessToken = (t) => localStorage.setItem(ACCESS_TOKEN_KEY, t)
export const clearTokens = () => localStorage.removeItem(ACCESS_TOKEN_KEY)
