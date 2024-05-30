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
              <FormLabel>Назва</FormLabel>
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
              <FormLabel>Ціна</FormLabel>
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
              <FormLabel>Опис</FormLabel>
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
                <FormLabel>Вершини</FormLabel>
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
                <FormLabel>Полігони</FormLabel>
                <FormControl>
                  <Input {...field} type="number" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="geometry"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Геометрія</FormLabel>
                <FormControl>
                  <Input {...field} type="text" />
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
                  <FormLabel>Анімована</FormLabel>
                  <FormDescription>Поставте галочку в цьому полі, якщо модель анімована.</FormDescription>
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
                  <FormLabel>З ригінгом</FormLabel>
                  <FormDescription>Поставте галочку в цьому полі, якщо модель має ригінг.</FormDescription>
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
                  <FormLabel>VR/AR низькополігональний</FormLabel>
                  <FormDescription>
                    Поставте галочку в цьому полі, якщо модель є VR/AR низькополігональною.
                  </FormDescription>
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
                  <FormLabel>PBR (фізично обґрунтований рендеринг)</FormLabel>
                  <FormDescription>
                    Поставте галочку в цьому полі, якщо модель використовує PBR (фізично обґрунтований рендеринг).
                  </FormDescription>
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
                  <FormLabel>Текстури</FormLabel>
                  <FormDescription>Поставте галочку в цьому полі, якщо модель використовує текстури.</FormDescription>
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
                  <FormLabel>Матеріали</FormLabel>
                  <FormDescription>Поставте галочку в цьому полі, якщо модель використовує матеріали.</FormDescription>
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
                  <FormLabel>UV-маппінг</FormLabel>
                  <FormDescription>Поставте галочку в цьому полі, якщо модель використовує UV-маппінг.</FormDescription>
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
                  <FormLabel>Розгорнуті UV</FormLabel>
                  <FormDescription>
                    Поставте галочку в цьому полі, якщо модель використовує розгорнуті UV.
                  </FormDescription>
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
                  <FormLabel>Використані плагіни</FormLabel>
                  <FormDescription>Поставте галочку в цьому полі, якщо модель використовує плагіни.</FormDescription>
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
                  <FormLabel>Готова для 3D-друку</FormLabel>
                  <FormDescription>Поставте галочку в цьому полі, якщо модель готова для 3D-друку.</FormDescription>
                </div>
              </FormItem>
            )}
          />
        </div>
        <div>
          <Label>Зображення</Label>
          <Input
            type="file"
            {...form.register('images')}
            className="mt-4"
            accept={acceptedImageTypes.join(',')}
            multiple
          />
        </div>
        <div>
          <Label>Моделі</Label>
          <Input
            type="file"
            {...form.register('model')}
            className="mt-4"
            accept={acceptedModelTypes.join(',')}
            multiple
          />
        </div>

        <Button type="submit" className="w-full" disabled={isLoading}>
          Додати модель
        </Button>
      </form>
    </Form>
  )
}
