import { $api } from '../../shared/api/api'

export const signIn = async ({ username, password }) => {
  const response = await $api.post('/auth/sign-in', { username, password })
  return response.data
}

export const getSession = async () => {
  const response = await $api.get('/auth/session')
  return response.data
}
