import { AddModelForm } from '../features/add-model'
import { Container } from '../shared/ui/container'

export function AddModelPage() {
  return (
    <Container>
      <h1 className="text-3xl font-bold">Add Model</h1>
      <AddModelForm />
    </Container>
  )
}
