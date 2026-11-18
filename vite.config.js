import { defineConfig } from 'vite'

// JSX를 React 17+ 자동 런타임으로 변환 (각 파일에서 `import React` 불필요)
export default defineConfig({
  esbuild: {
    jsx: 'automatic',
  },
})
