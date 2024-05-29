import { Routes, Route } from 'react-router-dom'

import { ROUTES } from '../../shared/const/routes'
import { SignInPage } from '../../pages/sign-in-page'
import { HomePage } from '../../pages/home-page'
import { AddModelPage } from '../../pages/add-model-page'
import { ProtectedPage } from '../../features/auth/ui/protected-page'
import { MainLayout } from '../../shared/layouts/main-layout'
import { PreviewModelPage } from '../../pages/preview-model-page'

export const RouteProvider = () => {
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
      <Route
        path={ROUTES.ADD_MODEL}
        element={
          <ProtectedPage>
            <MainLayout>
              <AddModelPage />
            </MainLayout>
          </ProtectedPage>
        }
      />
      <Route
        path={`${ROUTES.PREVIEW_MODEL}/:id`}
        element={
          <ProtectedPage>
            <MainLayout>
              <PreviewModelPage />
            </MainLayout>
          </ProtectedPage>
        }
      />
    </Routes>
  )
}
