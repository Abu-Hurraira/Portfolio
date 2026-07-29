import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'sonner'
import { AppProvider, useTheme } from '@/context/AppContext'
import { PageLoader } from '@/components/shared/LazyLoad'

const RootLayout = lazy(() =>
  import('@/layouts/RootLayout').then((m) => ({ default: m.RootLayout })),
)
const HomePage = lazy(() =>
  import('@/pages/HomePage').then((m) => ({ default: m.HomePage })),
)
const ProjectDetailPage = lazy(() =>
  import('@/pages/ProjectDetailPage').then((m) => ({ default: m.ProjectDetailPage })),
)
const ContactPage = lazy(() =>
  import('@/pages/ContactPage').then((m) => ({ default: m.ContactPage })),
)
const CompanyPage = lazy(() =>
  import('@/pages/CompanyPage').then((m) => ({ default: m.CompanyPage })),
)
const NotFoundPage = lazy(() =>
  import('@/pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })),
)

function ThemedToaster() {
  const { theme } = useTheme()
  return (
    <Toaster
      theme={theme}
      position="bottom-right"
      toastOptions={{
        className: 'glass border-white/10',
      }}
    />
  )
}

export default function App() {
  return (
    <HelmetProvider>
      <AppProvider>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <Suspense fallback={<PageLoader full />}>
            <Routes>
              <Route element={<RootLayout />}>
                <Route
                  index
                  element={
                    <Suspense fallback={<PageLoader full />}>
                      <HomePage />
                    </Suspense>
                  }
                />
                <Route
                  path="projects/:slug"
                  element={
                    <Suspense fallback={<PageLoader full />}>
                      <ProjectDetailPage />
                    </Suspense>
                  }
                />
                <Route
                  path="contact"
                  element={
                    <Suspense fallback={<PageLoader full />}>
                      <ContactPage />
                    </Suspense>
                  }
                />
                <Route
                  path="company"
                  element={
                    <Suspense fallback={<PageLoader full />}>
                      <CompanyPage />
                    </Suspense>
                  }
                />
                <Route
                  path="*"
                  element={
                    <Suspense fallback={<PageLoader full />}>
                      <NotFoundPage />
                    </Suspense>
                  }
                />
              </Route>
            </Routes>
          </Suspense>
          <ThemedToaster />
        </BrowserRouter>
      </AppProvider>
    </HelmetProvider>
  )
}
