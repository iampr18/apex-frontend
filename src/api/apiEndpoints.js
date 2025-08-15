const BASE = import.meta.env.VITE_API_BASE_URL

export const apiEndpoints = {
  auth: {
    login: () => `${BASE}/auth/login`,
    signup: () => `${BASE}/auth/signup`,
    refresh: () => `${BASE}/auth/refresh`,
    logout: () => `${BASE}/auth/logout`,
    me: () => `${BASE}/auth/me`,
  },
  todo: {
    listByUser: (userId, page = 1, limit = 20) => `${BASE}/todos?userId=${userId}&page=${page}&limit=${limit}`,
    create: () => `${BASE}/todos`,
    delete: (todoId) => `${BASE}/todos/${todoId}`,
  },
  currency: {
    // future endpoints
  },
}
export default apiEndpoints
