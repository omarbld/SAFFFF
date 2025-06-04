import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">SafeFood</h3>
            <p className="text-gray-600">
              منصة ذكية تربط بين المطاعم والمتاجر والجمعيات الخيرية لتقليل هدر الطعام
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-green-600">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-green-600">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-green-600">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">تواصل معنا</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">contact@safefood.ma</li>
              <li className="text-gray-600">+212 5XX-XXXXXX</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500">
            © {currentYear} SafeFood. جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
}