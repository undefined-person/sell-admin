import Autoplay from 'embla-carousel-autoplay'

import { PageSpinner } from '../../../shared/ui/page-spinner'
import { useGetModelById } from '../model/use-get-model-by-id'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../../../shared/ui/carousel'
import { getImageUrl } from '../../../shared/utils/get-image-url'
import { Card, CardContent, CardHeader } from '../../../shared/ui/card'

export function ViewModel() {
  const { isError, isPending, model } = useGetModelById()

  if (isPending) {
    return <PageSpinner />
  }

  if (isError) {
    return <div>Something went wrong</div>
  }

  return (
    <section>
      <div className="grid grid-cols-[3fr_1fr]">
        <div>
          <Carousel
            className="w-full"
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}>
            <CarouselContent>
              {model.images.map((imageUrl) => (
                <CarouselItem key={imageUrl}>
                  <img className="rounded-lg" src={getImageUrl(imageUrl)} alt={imageUrl} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className="mt-4 space-y-2">
            <h1 className="text-3xl font-bold">{model.name}</h1>
            <p className="text-gray-600">{model.description}</p>
          </div>
        </div>
        <div className="ml-16">
          <Card>
            <CardHeader className="text-xl font-semibold">Деталі 3D моделі</CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center justify-between pb-2 border-b">
                  Дата публікації{' '}
                  <span className="font-semibold">{new Date(model.publishDate).toLocaleDateString()}</span>
                </li>
                <li className="flex items-center justify-between pb-2 border-b">
                  Геометрія <span className="font-semibold">{model.geometry}</span>
                </li>
                <li className="flex items-center justify-between pb-2 border-b">
                  Полігони <span className="font-semibold">{model.polygons}</span>
                </li>
                <li className="flex items-center justify-between pb-2 border-b">
                  Вершини <span className="font-semibold">{model.vertices}</span>
                </li>
                <DetailBooleanItem label="Текстури" value={model.textures} />
                <DetailBooleanItem label="Матеріали" value={model.materials} />
                <DetailBooleanItem label="UV-маппінг" value={model.uvMapping} />
                <DetailBooleanItem label="Розгорнуті UV" value={model.unwrappedUVs} />
                <DetailBooleanItem label="Використано плагіни" value={model.pluginsUsed} />
                <DetailBooleanItem label="Готова для 3D-друку" value={model.readyFor3DPrinting} />
                <DetailBooleanItem label="Анімована" value={model.animated} />
                <DetailBooleanItem label="З ригінгом" value={model.rigged} />
                <DetailBooleanItem label="VR/AR низькополігональна" value={model.vrArLowPoly} />
                <DetailBooleanItem label="PBR (фізично обґрунтований рендеринг)" value={model.pbr} />
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

const DetailBooleanItem = ({ label, value }) => {
  return (
    <li className="flex items-center justify-between pb-2 border-b">
      {label}
      <span>
        {value ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-500" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="m10.6 13.8l-2.15-2.15q-.275-.275-.7-.275t-.7.275t-.275.7t.275.7L9.9 15.9q.3.3.7.3t.7-.3l5.65-5.65q.275-.275.275-.7t-.275-.7t-.7-.275t-.7.275zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
            />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-500" viewBox="0 0 256 256">
            <path
              fill="currentColor"
              d="M165.66 101.66L139.31 128l26.35 26.34a8 8 0 0 1-11.32 11.32L128 139.31l-26.34 26.35a8 8 0 0 1-11.32-11.32L116.69 128l-26.35-26.34a8 8 0 0 1 11.32-11.32L128 116.69l26.34-26.35a8 8 0 0 1 11.32 11.32M232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88"
            />
          </svg>
        )}
      </span>
    </li>
  )
}
