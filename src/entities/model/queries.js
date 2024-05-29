import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { getModels, deleteModel, getModel } from './model-api'

const modelsKey = ['models']

export function useGetModelsQuery({ page }) {
  return useQuery({
    queryKey: [modelsKey, page],
    queryFn: () => getModels(page),
  })
}

export function useDeleteModelMutation() {
  const queryClient = useQueryClient()

  const searchParams = new URLSearchParams(window.location.search)

  const pageQuery = searchParams.get('page')

  return useMutation({
    mutationFn: deleteModel,
    async onSettled() {
      await queryClient.invalidateQueries({
        queryKey: [modelsKey, pageQuery],
      })
    },
  })
}

export function useGetModelQuery({ id }) {
  return useQuery({
    queryKey: [modelsKey, id],
    queryFn: () => getModel(id),
  })
}
