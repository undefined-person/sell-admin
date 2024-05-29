import { useDeleteModelMutation } from '../../../entities/model'

export const useDeleteModel = () => {
  const deleteModelMutation = useDeleteModelMutation()

  const handleDeleteModel = async (id) => {
    await deleteModelMutation.mutateAsync(id)
  }

  return {
    handleDeleteModel,
    isDeleteModelPending: deleteModelMutation.isPending,
  }
}
