import { RouteProvider } from './providers/route-provider'

import { Toaster } from '../shared/ui/toaster'
function App() {
  return (
    <>
      <RouteProvider />
      <Toaster />
    </>
  )
}

export default App
