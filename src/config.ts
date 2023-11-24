import { Pathnames } from 'next-intl/navigation';

export const locales = ['en', 'de', 'pt-BR'] as const;

export const pathnames = {
  '/': '/',
  '/pathnames': {
    en: '/pathnames',
    de: '/pfadnamen',
    'pt-BR': '/caminhos'
  }
} satisfies Pathnames<typeof locales>;

export type AppPathnames = keyof typeof pathnames;
