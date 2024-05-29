import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from '../../../shared/ui/form'
import { useAddModelForm } from '../model/use-add-model-form'
import { Input } from '../../../shared/ui/input'
import { Button } from '../../../shared/ui/button'
import { Textarea } from '../../../shared/ui/textarea'
import { Checkbox } from '../../../shared/ui/checkbox'
import { Label } from '../../../shared/ui/label'

export function AddModelForm() {
  const { acceptedImageTypes, acceptedModelTypes, form, isLoading, onSubmit } = useAddModelForm()

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="w-full mt-4 space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input {...field} type="number" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="vertices"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Vertices</FormLabel>
                <FormControl>
                  <Input {...field} type="number" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="polygons"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Polygons</FormLabel>
                <FormControl>
                  <Input {...field} type="number" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="animated"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start p-4 space-x-3 space-y-0 border rounded-md">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Animated</FormLabel>
                  <FormDescription>Check this box if the model is animated.</FormDescription>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="rigged"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start p-4 space-x-3 space-y-0 border rounded-md">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Rigged</FormLabel>
                  <FormDescription>Check this box if the model is rigged.</FormDescription>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="vrArLowPoly"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start p-4 space-x-3 space-y-0 border rounded-md">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>VR/AR Low Poly</FormLabel>
                  <FormDescription>Check this box if the model is VR/AR Low Poly.</FormDescription>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="pbr"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start p-4 space-x-3 space-y-0 border rounded-md">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>PBR</FormLabel>
                  <FormDescription>Check this box if the model uses PBR.</FormDescription>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="textures"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start p-4 space-x-3 space-y-0 border rounded-md">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Textures</FormLabel>
                  <FormDescription>Check this box if the model uses textures.</FormDescription>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="materials"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start p-4 space-x-3 space-y-0 border rounded-md">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Materials</FormLabel>
                  <FormDescription>Check this box if the model uses materials.</FormDescription>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="uvMapping"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start p-4 space-x-3 space-y-0 border rounded-md">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>UV Mapping</FormLabel>
                  <FormDescription>Check this box if the model uses UV mapping.</FormDescription>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="unwrappedUVs"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start p-4 space-x-3 space-y-0 border rounded-md">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Unwrapped UVs</FormLabel>
                  <FormDescription>Check this box if the model has unwrapped UVs.</FormDescription>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="pluginsUsed"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start p-4 space-x-3 space-y-0 border rounded-md">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Plugins Used</FormLabel>
                  <FormDescription>Check this box if the model uses plugins.</FormDescription>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="readyFor3DPrinting"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start p-4 space-x-3 space-y-0 border rounded-md">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Ready for 3D Printing</FormLabel>
                  <FormDescription>Check this box if the model is ready for 3D printing.</FormDescription>
                </div>
              </FormItem>
            )}
          />
        </div>

        <div>
          <Label>Images</Label>
          <Input
            type="file"
            {...form.register('images')}
            className="mt-4"
            accept={acceptedImageTypes.join(',')}
            multiple
          />
        </div>
        <div>
          <Label>Models</Label>
          <Input
            type="file"
            {...form.register('model')}
            className="mt-4"
            accept={acceptedModelTypes.join(',')}
            multiple
          />
        </div>

        <Button type="submit" className="w-full" disabled={isLoading}>
          Add model
        </Button>
      </form>
    </Form>
  )
}
