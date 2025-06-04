import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from './components/ErrorBoundary';
import { AppRoutes } from './routes';
import { Layout } from './components/Layout';
import { LoadingSpinner } from './components/LoadingSpinner';

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Suspense fallback={<LoadingSpinner />}>
          <Layout>
            <AppRoutes />
          </Layout>
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;