import { Link } from 'react-router-dom'
import { cn } from '../../../shared/utils/cn'
import { Button, buttonVariants } from '../../../shared/ui/button'

export const columns = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'images',
    header: 'Image',
    cell: ({ row }) => {
      return (
        <img
          className="object-cover w-56 h-40 rounded-md"
          src={`${import.meta.env.VITE_API_URI}/${row.original.images}`}
          alt={row.original.name}
        />
      )
    },
  },
  {
    accessorKey: 'price',
    header: 'Price',
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      return (
        <div className="flex items-center justify-end gap-4">
          <Link
            to={`/members/${row.original._id}`}
            className={cn(
              buttonVariants({
                variant: 'default',
              })
            )}>
            View
          </Link>
          <Button variant="outline">Edit</Button>
          <Button variant="destructive">Delete</Button>
        </div>
      )
    },
  },
]
