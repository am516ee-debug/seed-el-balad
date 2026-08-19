import { useLanguage } from './useLanguage';
import { TranslationHelper } from '../helpers/TranslationHelper';

export const useTranslation = () => {
  const { language } = useLanguage();

  const t = (key: string): string => {
    return TranslationHelper.get(key, language);
  };

  return { t, language };
};
