import { Helmet } from 'react-helmet-async'
import { SITE } from '@/data'
import { withBase } from '@/utils/assets'

interface SEOProps {
  title?: string
  description?: string
  path?: string
  image?: string
}

export function SEO({
  title,
  description = SITE.description,
  path = '/',
  image = '/og.png',
}: SEOProps) {
  const fullTitle = title ? `${title} · ${SITE.name}` : `${SITE.name} · ${SITE.title}`
  const url = `${SITE.url}${path}`
  const resolvedImage = withBase(image)

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="author" content={SITE.name} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={resolvedImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="theme-color" content="#050505" />
    </Helmet>
  )
}
