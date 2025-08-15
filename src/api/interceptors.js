import { jwtDecode } from 'jwt-decode';
import { apiEndpoints } from './apiEndpoints.js';
import { getAccessToken, setAccessToken, clearTokens } from '../utils/storage.js';

function isExpired(token) {
  try {
    const { exp } = jwtDecode(token); // updated call
    return !exp || exp * 1000 < Date.now() + 5000;
  } catch {
    return true;
  }
}

export async function handleRefreshIfNeeded() {
  const token = getAccessToken();
  if (!token || isExpired(token)) {
    const res = await fetch(apiEndpoints.auth.refresh(), {
      method: 'POST',
      credentials: 'include',
    });
    const json = await res.json().catch(() => ({}));
    if (!res.ok || !json?.data?.accessToken) {
      clearTokens();
      throw new Error('UNAUTHENTICATED');
    }
    setAccessToken(json.data.accessToken);
  }
}

export async function withAuthHeaders(base = {}) {
  const accessToken = getAccessToken();
  return accessToken ? { ...base, Authorization: `Bearer ${accessToken}` } : base;
}
