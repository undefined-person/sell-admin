import { $api } from '../../shared/api/api'

export const addModel = async (model) => {
  const response = await $api.post('/model', model, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })

  return response.data
}

export const getModels = async (page) => {
  const response = await $api.get('/model', {
    params: {
      page,
    },
  })

  return response.data
}

export const getModel = async (id) => {
  const response = await $api.get(`/model/${id}`)

  return response.data
}

export const deleteModel = async (id) => {
  const response = await $api.delete(`/model/${id}`)

  return response.data
}
