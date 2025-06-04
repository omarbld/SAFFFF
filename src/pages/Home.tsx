import { Helmet } from 'react-helmet';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>SafeFood - الصفحة الرئيسية</title>
      </Helmet>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-green-600 mb-8">
          معاً لمحاربة هدر الطعام في المغرب
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          منصة ذكية تربط بين المطاعم والمتاجر والجمعيات الخيرية لتقليل هدر الطعام
        </p>
      </div>
    </>
  );
}