import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "{{projectName}}" },
    { name: "description", content: "Welcome to {{projectName}}!" },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <main className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-8 text-center">
            Welcome to {{projectName}}
          </h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              🚀 はじめよう
            </h2>
            <p className="text-gray-600 mb-6">
              このプロジェクトはReact Router v7（SPA mode）、TypeScript、Tailwind CSSで構築されています。
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  📁 新しいルートを追加
                </h3>
                <p className="text-gray-600 text-sm">
                  <code className="bg-gray-100 px-2 py-1 rounded">app/routes/</code>
                  ディレクトリに新しいファイルを作成してください
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  🎨 スタイリング
                </h3>
                <p className="text-gray-600 text-sm">
                  Tailwind CSSのユーティリティクラスを使用して、美しいUIを構築できます
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  🔧 型安全な開発
                </h3>
                <p className="text-gray-600 text-sm">
                  TypeScriptによる完全な型サポートで、安全で効率的な開発が可能です
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  ⚡ 高速な開発体験
                </h3>
                <p className="text-gray-600 text-sm">
                  Viteによる即座のHMRで、変更が瞬時に反映されます
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              📚 リソース
            </h2>
            <ul className="space-y-2 text-blue-600">
              <li>
                <a
                  href="https://reactrouter.com/dev/guides"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  React Router v7 ドキュメント →
                </a>
              </li>
              <li>
                <a
                  href="https://tailwindcss.com/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Tailwind CSS ドキュメント →
                </a>
              </li>
              <li>
                <a
                  href="https://www.typescriptlang.org/docs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  TypeScript ドキュメント →
                </a>
              </li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}