import { ModelsDataTable } from './models-data-table'
import { columns } from './models-columns'
import { useGetModels } from '../model/use-get-models'
import { PageSpinner } from '../../../shared/ui/page-spinner'

export function ModelsTable() {
  const { handleNextPage, handlePrevPage, isError, isNextPage, isPending, isPrevPage, models } = useGetModels()

  if (isPending) return <PageSpinner />

  if (isError) return <div>Something went wrong</div>

  return (
    <div>
      <ModelsDataTable
        columns={columns}
        data={models}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        isNextPage={isNextPage}
        isPrevPage={isPrevPage}
      />
    </div>
  )
}
