import type { MetaFunction } from "react-router";
import { Link } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "{{projectName}} - Home" },
    { name: "description", content: "{{projectName}}のホームページです" },
  ];
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Welcome to {{projectName}}!
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            React Router v7 SSRモードで構築されたWebアプリケーションです
          </p>
          
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              🚀 機能
            </h2>
            <ul className="text-left space-y-3 text-gray-600">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                React Router v7 SSRモード
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Tailwind CSS でスタイリング
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                PNPM Workspace でモノレポ管理
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                共有UIコンポーネント
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                TypeScript サポート
              </li>
            </ul>
          </div>

          <div className="space-x-4">
            <Link
              to="/about"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              About ページへ
            </Link>
            <a
              href="https://reactrouter.com/en/main"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
            >
              React Router ドキュメント
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}