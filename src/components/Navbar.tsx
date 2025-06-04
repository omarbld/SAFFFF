import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

export function Navbar() {
  const { t } = useTranslation();
  const { user, signOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-green-600">SafeFood</span>
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-4 md:space-x-reverse">
            <Link to="/" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md">
              {t('nav.home')}
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md">
              {t('nav.about')}
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md">
              {t('nav.contact')}
            </Link>
            {user ? (
              <>
                <Link to="/dashboard" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md">
                  {t('nav.dashboard')}
                </Link>
                <button
                  onClick={() => signOut()}
                  className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md"
                >
                  {t('auth.logout')}
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md">
                  {t('auth.login')}
                </Link>
                <Link
                  to="/register"
                  className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
                >
                  {t('auth.register')}
                </Link>
              </>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-green-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block text-gray-700 hover:text-green-600 px-3 py-2 rounded-md"
            >
              {t('nav.home')}
            </Link>
            <Link
              to="/about"
              className="block text-gray-700 hover:text-green-600 px-3 py-2 rounded-md"
            >
              {t('nav.about')}
            </Link>
            <Link
              to="/contact"
              className="block text-gray-700 hover:text-green-600 px-3 py-2 rounded-md"
            >
              {t('nav.contact')}
            </Link>
            {user ? (
              <>
                <Link
                  to="/dashboard"
                  className="block text-gray-700 hover:text-green-600 px-3 py-2 rounded-md"
                >
                  {t('nav.dashboard')}
                </Link>
                <button
                  onClick={() => signOut()}
                  className="block w-full text-right text-gray-700 hover:text-green-600 px-3 py-2 rounded-md"
                >
                  {t('auth.logout')}
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block text-gray-700 hover:text-green-600 px-3 py-2 rounded-md"
                >
                  {t('auth.login')}
                </Link>
                <Link
                  to="/register"
                  className="block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 text-center"
                >
                  {t('auth.register')}
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}