import { useQuery } from '@tanstack/react-query'
import { getModels } from './model-api'

const modelsKey = ['models']

export function useGetModelsQuery({ page }) {
  return useQuery({
    queryKey: [modelsKey, page],
    queryFn: () => getModels(page),
  })
}
