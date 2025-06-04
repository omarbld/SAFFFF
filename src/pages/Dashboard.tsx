import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../hooks/useAuth';

export default function Dashboard() {
  const { t } = useTranslation();
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <Helmet>
        <title>SafeFood - لوحة التحكم</title>
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            مرحباً بك في لوحة التحكم
          </h1>
          
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <p className="text-gray-600">
              البريد الإلكتروني: {user?.email}
            </p>
          </div>

          {isLoading ? (
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-4 border-green-500 border-t-transparent"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-green-50 rounded-lg p-6">
                <h2 className="text-lg font-semibold text-green-700 mb-2">
                  إحصائيات
                </h2>
                <p className="text-green-600">
                  قريباً...
                </p>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <h2 className="text-lg font-semibold text-blue-700 mb-2">
                  التبرعات
                </h2>
                <p className="text-blue-600">
                  قريباً...
                </p>
              </div>

              <div className="bg-purple-50 rounded-lg p-6">
                <h2 className="text-lg font-semibold text-purple-700 mb-2">
                  المستفيدون
                </h2>
                <p className="text-purple-600">
                  قريباً...
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}