import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import * as z from 'zod'

import { useToast } from '../../../shared/hooks/use-toast'
import { addModel } from '../../../entities/model/model-api'

const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']
const ACCEPTED_MODEL_TYPES = ['.obj', '.fbx', '.glb', '.gltf', '.zip', '.rar', '.7z']

const addModelSchema = z.object({
  name: z.string().min(3, 'Must be at least 3 characters').max(50, 'Must contain at most 50 character(s)'),
  price: z.coerce.number().gte(1, 'Price must be at least 1').max(1000000, 'Price must be at most 1000000'),
  description: z.string().min(3, 'Must be at least 3 characters').max(1000, 'Must contain at most 1000 character(s)'),
  vertices: z.coerce.number().gte(1, 'Vertices must be at least 1'),
  polygons: z.coerce.number().gte(1, 'Polygons must be at least 1'),
  animated: z.boolean().default(false),
  rigged: z.boolean().default(false),
  vrArLowPoly: z.boolean().default(false),
  pbr: z.boolean().default(false),
  textures: z.boolean().default(false),
  materials: z.boolean().default(false),
  uvMapping: z.boolean().default(false),
  unwrappedUVs: z.boolean().default(false),
  pluginsUsed: z.boolean().default(false),
  readyFor3DPrinting: z.boolean().default(false),
  images: z.any(),
  model: z.any(),
})

export function useAddModelForm() {
  const { toast } = useToast()

  const form = useForm({
    resolver: zodResolver(addModelSchema),
    defaultValues: {
      name: '',
      price: '',
      description: '',
      vertices: 0,
      polygons: 0,
      animated: false,
      rigged: false,
      vrArLowPoly: false,
      pbr: false,
      textures: false,
      materials: false,
      uvMapping: false,
      unwrappedUVs: false,
      pluginsUsed: false,
      readyFor3DPrinting: false,
      images: [],
      model: [],
    },
  })

  const addModelMutation = useMutation({
    mutationFn: addModel,
    onSuccess: () => {
      toast({
        title: 'Success',
        description: 'Model added successfully',
      })
      form.reset()
    },
    onError: (error) => {
      toast({
        title: 'Error',
        description: error.response?.data?.message || 'Something went wrong',
      })
    },
  })

  const onSubmit = form.handleSubmit((data) => {
    const formData = new FormData()

    Object.entries(data).forEach(([key, value]) => {
      if (value instanceof FileList) {
        Array.from(value).forEach((file) => {
          formData.append(key, file)
        })
      } else {
        formData.append(key, value)
      }
    })

    addModelMutation.mutate(formData)
  })

  return {
    form,
    onSubmit,
    isLoading: addModelMutation.isPending,
    acceptedImageTypes: ACCEPTED_IMAGE_TYPES,
    acceptedModelTypes: ACCEPTED_MODEL_TYPES,
  }
}
