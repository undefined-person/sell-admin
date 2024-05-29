import Autoplay from 'embla-carousel-autoplay'

import { PageSpinner } from '../../../shared/ui/page-spinner'
import { useGetModelById } from '../model/use-get-model-by-id'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../../../shared/ui/carousel'
import { getImageUrl } from '../../../shared/utils/get-image-url'
import { Card, CardContent, CardHeader } from '../../../shared/ui/card'
import { Button } from '../../../shared/ui/button'

// {
//   "_id": "665726aa4923168b43665a36",
//   "name": "123",
//   "description": "123",
//   "price": 123,
//   "animated": true,
//   "rigged": false,
//   "vrArLowPoly": false,
//   "pbr": false,
//   "geometry": "Polygon mesh",
//   "polygons": 123123,
//   "vertices": 123123,
//   "textures": false,
//   "materials": false,
//   "uvMapping": true,
//   "unwrappedUVs": true,
//   "pluginsUsed": true,
//   "readyFor3DPrinting": false,
//   "images": [
//     "/images/455901673-Screenshot 2024-01-09 122058 - Copy - Copy (2).png",
//     "/images/581544039-Screenshot 2024-01-09 122058 - Copy (2).png",
//     "/images/202731946-Screenshot 2024-01-09 124741 - Copy.png"
//   ],
//   "model": [
//     "/images/667592532-uploads_files_2421249_TV+Room+by+Deline.fbx"
//   ],
//   "publishDate": "2024-05-29T12:59:22.650Z",
//   "__v": 0
// }

export function ViewModel() {
  const { isError, isPending, model } = useGetModelById()

  if (isPending) {
    return <PageSpinner />
  }

  if (isError) {
    return <div>Something went wrong</div>
  }

  console.log(model)

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
              {model.images.map((imageUrl, index) => (
                <CarouselItem key={index}>
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
            <CardContent className="flex items-center justify-center gap-4 p-4">
              <p className="text-xl font-semibold">{model.price}₴</p>
              <Button>Buy</Button>
            </CardContent>
          </Card>
          <Card className="mt-4">
            <CardHeader className="text-xl font-semibold">3D Model details</CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center justify-between pb-2 border-b">
                  Publish date <span className="font-semibold">{new Date(model.publishDate).toLocaleDateString()}</span>
                </li>
                <li className="flex items-center justify-between pb-2 border-b">
                  Geometry <span className="font-semibold">{model.geometry}</span>
                </li>
                <li className="flex items-center justify-between pb-2 border-b">
                  Polygons <span className="font-semibold">{model.polygons}</span>
                </li>
                <li className="flex items-center justify-between pb-2 border-b">
                  Vertices <span className="font-semibold">{model.vertices}</span>
                </li>
                <DetailBooleanItem label="Textures" value={model.textures} />
                <DetailBooleanItem label="Materials" value={model.materials} />
                <DetailBooleanItem label="UV Mapping" value={model.uvMapping} />
                <DetailBooleanItem label="Unwrapped UVs" value={model.unwrappedUVs} />
                <DetailBooleanItem label="Plugins used" value={model.pluginsUsed} />
                <DetailBooleanItem label="Ready for 3D printing" value={model.readyFor3DPrinting} />
                <DetailBooleanItem label="Animated" value={model.animated} />
                <DetailBooleanItem label="Rigged" value={model.rigged} />
                <DetailBooleanItem label="VR/AR low poly" value={model.vrArLowPoly} />
                <DetailBooleanItem label="PBR" value={model.pbr} />
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
