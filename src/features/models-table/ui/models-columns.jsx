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
          className="object-cover w-64 h-48 rounded-md"
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
]
