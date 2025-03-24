import { APP_DESCRIPTION, APP_NAME, APP_URL } from '@/config/constants';
import type { Metadata } from 'next';

export function getMetadata({
    title,
    description,
    pathname,
    images,
  }: {
    title?: string;
    description?: string;
    pathname?: string;
    images?: Array<{ url: string; alt: string }>;
  }): Metadata {
    const metaTitle = title ? `${title} | ${APP_NAME}` : APP_NAME;
    const metaDescription = description || APP_DESCRIPTION;
  
    return {
      title: metaTitle,
      description: metaDescription,
      creator: 'Barış Arslan',
      metadataBase: new URL(APP_URL),
      openGraph: {
        type: 'website',
        title: metaTitle,
        description: metaDescription,
        siteName: APP_NAME,
        locale: 'en_US',
        images,
        url: `${APP_URL}${pathname}`,
      },
      twitter: {
        card: 'summary_large_image',
        title: metaTitle,
        description: metaDescription,
        images,
        creator: '@Arslan_1881',
      },
      alternates: {
        canonical: pathname,
      },
    };
  }
  