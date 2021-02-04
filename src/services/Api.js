import { create } from 'apisauce'

import { BASE_URL } from '../config'

export const URIS = {
  POSTS: 'posts',
  POST: id => `posts/${id}`
}

const createApiClient = (baseURL = BASE_URL) => {
  const api = create({
    baseURL,
    timeout: 15000
  })

  const setHeaders = (params) => {
    for (const key in params) {
      api.setHeader(key, params[key])
    }
  }

  // kickoff our api functions
  return {
    // client modifiers
    setHeaders,
    fetchPosts: () => api.get(URIS.POSTS),
    fetchPost: id => api.get(URIS.POST(id)),
  }
}

export default createApiClient()