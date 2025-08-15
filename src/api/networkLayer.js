import { withAuthHeaders, handleRefreshIfNeeded } from './interceptors.js'

async function request(method, url, body, onSuccess, onError) {
  try {
    await handleRefreshIfNeeded()
    const headers = await withAuthHeaders({ 'Content-Type': 'application/json' })
    const res = await fetch(url, {
      method,
      headers,
      credentials: 'include',
      body: body ? JSON.stringify(body) : undefined,
    })
    const json = await res.json().catch(() => ({}))
    if (!res.ok) throw { status: res.status, ...json }
    onSuccess && onSuccess(json)
    return json
  } catch (err) {
    onError && onError(err)
    throw err
  }
}

export const networkLayer = {
  get: (url, onSuccess, onError) => request('GET', url, null, onSuccess, onError),
  post: (url, onSuccess, onError, body) => request('POST', url, body, onSuccess, onError),
  delete: (url, onSuccess, onError) => request('DELETE', url, null, onSuccess, onError),
}
export default networkLayer
