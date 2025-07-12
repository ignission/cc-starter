import type { MetaFunction } from "react-router";
import { Link } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "{{projectName}} - About" },
    { name: "description", content: "{{projectName}}について" },
  ];
};

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              About {{projectName}}
            </h1>
            <p className="text-xl text-gray-600">
              このプロジェクトについて詳しく説明します
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                🏗️ アーキテクチャ
              </h2>
              <ul className="space-y-2 text-gray-600">
                <li>• React Router v7 SSR</li>
                <li>• PNPM Workspace</li>
                <li>• Turbo によるビルド最適化</li>
                <li>• TypeScript</li>
                <li>• Tailwind CSS</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                📱 プラットフォーム
              </h2>
              <ul className="space-y-2 text-gray-600">
                <li>• Web (このアプリ)</li>
                <li>• React Native (Expo)</li>
                <li>• 共有 UI コンポーネント</li>
                <li>• 共有ユーティリティ</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              🎯 目的
            </h2>
            <p className="text-gray-600 leading-relaxed">
              このテンプレートは、Claude Code開発に最適化されたReact Native Monorepoプロジェクトを
              素早く作成することを目的としています。WebとMobileの両方のプラットフォームで
              コードを共有しながら、それぞれに最適化された開発体験を提供します。
            </p>
          </div>

          <div className="text-center">
            <Link
              to="/"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              ← ホームに戻る
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}