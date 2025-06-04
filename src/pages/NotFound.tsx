import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>SafeFood - الصفحة غير موجودة</title>
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-green-600 mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-8">عذراً، الصفحة التي تبحث عنها غير موجودة</p>
          <Link
            to="/"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors"
          >
            العودة للصفحة الرئيسية
          </Link>
        </div>
      </div>
    </>
  );
}