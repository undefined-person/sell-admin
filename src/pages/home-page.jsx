import { Container } from '../shared/ui/container'
import { ModelsTable } from '../features/models-table'
export function HomePage() {
  return (
    <Container>
      <h1 className="text-3xl font-bold">Models list</h1>
      <ModelsTable />
    </Container>
  )
}
