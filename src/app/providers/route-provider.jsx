import { Routes, Route } from 'react-router-dom'

import { ROUTES } from '../../shared/const/routes'
import { SignInPage } from '../../pages/sign-in-page'
import { HomePage } from '../../pages/home-page'
import { ProtectedPage } from '../../features/auth/ui/protected-page'
import { MainLayout } from '../../shared/layouts/main-layout'

export const RouteProvider = ({ children }) => {
  return (
    <Routes>
      <Route
        path={ROUTES.HOME}
        element={
          <ProtectedPage>
            <MainLayout>
              <HomePage />
            </MainLayout>
          </ProtectedPage>
        }
      />
      <Route path={ROUTES.SIGN_IN} element={<SignInPage />} />
      {/* <Route path={ROUTES.ADD_MODEL} element={<AddModel />} /> */}
      {/* <Route path={ROUTES.PREVIEW_MODEL} element={<PreviewModel />} /> */}
    </Routes>
  )
}
