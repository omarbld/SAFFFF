import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  ar: {
    translation: {
      common: {
        loading: 'جاري التحميل...',
        error: 'حدث خطأ!',
        retry: 'إعادة المحاولة',
      },
      auth: {
        login: 'تسجيل الدخول',
        register: 'إنشاء حساب',
        logout: 'تسجيل الخروج',
        email: 'البريد الإلكتروني',
        password: 'كلمة المرور',
      },
      nav: {
        home: 'الرئيسية',
        about: 'عن المنصة',
        contact: 'اتصل بنا',
        dashboard: 'لوحة التحكم',
      },
    },
  },
  fr: {
    translation: {
      common: {
        loading: 'Chargement...',
        error: 'Une erreur est survenue!',
        retry: 'Réessayer',
      },
      auth: {
        login: 'Se connecter',
        register: "S'inscrire",
        logout: 'Se déconnecter',
        email: 'Email',
        password: 'Mot de passe',
      },
      nav: {
        home: 'Accueil',
        about: 'À propos',
        contact: 'Contact',
        dashboard: 'Tableau de bord',
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ar',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;