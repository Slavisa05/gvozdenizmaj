import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: 'https://gvozdenizmaj.com',
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://gvozdenizmaj.com/o-nama',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://gvozdenizmaj.com/nase-oruzje',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://gvozdenizmaj.com/dogadjaji',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://gvozdenizmaj.com/cenovnik',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://gvozdenizmaj.com/kontakt',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}