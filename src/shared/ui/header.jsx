import { Link, useNavigate } from 'react-router-dom'
import { Button } from './button'
import { ROUTES } from '../const/routes'

export function Header() {
  const navigate = useNavigate()
  return (
    <header className="bg-white">
      <div className="container flex items-center justify-between p-4 mx-auto">
        <Link to={ROUTES.HOME} className="text-xl font-semibold">
          ADMIN
        </Link>
        <Button
          onClick={() => {
            navigate(ROUTES.ADD_MODEL)
          }}>
          Add model
        </Button>
      </div>
    </header>
  )
}
