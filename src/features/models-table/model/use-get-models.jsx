import { useState } from 'react'
import { useGetModelsQuery } from '../../../entities/model'

export const useGetModels = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const { data, isPending, isError } = useGetModelsQuery({
    page: currentPage,
  })

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1)
  }

  const handlePrevPage = () => {
    setCurrentPage((prev) => prev - 1)
  }

  return {
    models: data?.models,
    isNextPage: data?.isNextPage,
    isPrevPage: data?.isPrevPage,
    isPending,
    isError,
    handleNextPage,
    handlePrevPage,
  }
}
