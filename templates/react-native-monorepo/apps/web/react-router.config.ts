import type { Config } from "@react-router/dev/config";

export default {
  // SSRモードを有効化
  ssr: true,
  
  // Viteプラグインの設定
  vite: {
    plugins: [],
  },
} satisfies Config;