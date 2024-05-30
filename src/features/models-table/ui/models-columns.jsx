import { Link } from 'react-router-dom'

import { cn } from '../../../shared/utils/cn'
import { buttonVariants } from '../../../shared/ui/button'
import { DeleteModal } from '../../delete-model/'
import { ROUTES } from '../../../shared/const/routes'
import { getImageUrl } from '../../../shared/utils/get-image-url'

export const columns = [
  {
    accessorKey: 'name',
    header: `Назва`,
  },
  {
    accessorKey: 'images',
    header: 'Картинка',
    cell: ({ row }) => {
      return (
        <img
          className="object-cover w-56 h-40 rounded-md"
          src={getImageUrl(row.original.images)}
          alt={row.original.name}
        />
      )
    },
  },
  {
    accessorKey: 'price',
    header: 'Ціна',
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      return (
        <div className="flex items-center justify-end gap-4">
          <Link
            to={`${ROUTES.PREVIEW_MODEL}/${row.original._id}`}
            className={cn(
              buttonVariants({
                variant: 'default',
              })
            )}>
            Переглянути
          </Link>
          <DeleteModal id={row.original._id} />
        </div>
      )
    },
  },
]
