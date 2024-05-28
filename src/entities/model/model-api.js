import { $api } from '../../shared/api/api'

export const addModel = async (model) => {
  const response = await $api.post('/model', model, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })

  console.log('response', response)
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

export const updateModel = async (id, model) => {
  const response = await $api.patch(`/model/${id}`, model)

  return response.data
}
