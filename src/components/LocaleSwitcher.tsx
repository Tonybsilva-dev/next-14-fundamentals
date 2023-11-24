import { locales } from '@/config';
import { useLocale, useTranslations } from 'next-intl';
import LocaleSwitcherSelect from './LocaleSwitcherSelect';

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();
  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t('label')}>
      {locales.map((cur, index) => (
        <option key={index} value={cur}>
          {t('locale', { locale: cur }) || cur}
        </option>
      ))}
    </LocaleSwitcherSelect>
  );
}
