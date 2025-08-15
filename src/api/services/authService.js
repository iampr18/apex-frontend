import apiEndpoints from '../apiEndpoints.js'
import { networkLayer } from '../networkLayer.js'

export const authService = {
  login: (email, password, onSuccess, onError) =>
    networkLayer.post(apiEndpoints.auth.login(), onSuccess, onError, { email, password }),
  signup: (payload, onSuccess, onError) =>
    networkLayer.post(apiEndpoints.auth.signup(), onSuccess, onError, payload),
  me: (onSuccess, onError) => networkLayer.get(apiEndpoints.auth.me(), onSuccess, onError),
  logout: (onSuccess, onError) => networkLayer.post(apiEndpoints.auth.logout(), onSuccess, onError),
}
export default authService
