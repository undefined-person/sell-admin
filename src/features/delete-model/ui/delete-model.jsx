import { Button } from '../../../shared/ui/button'
import { useDeleteModel } from '../model/use-delete-model'

export function DeleteModal({ id }) {
  const { handleDeleteModel, isDeleteModelPending } = useDeleteModel()
  return (
    <Button variant="destructive" onClick={() => handleDeleteModel(id)} disabled={isDeleteModelPending}>
      Видалити
    </Button>
  )
}
