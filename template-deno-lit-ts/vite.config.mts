import { defineConfig } from 'npm:vite@^5.4.8'

import 'npm:lit@^2.7.5'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/my-element.ts',
      formats: ['es']
    },
    rollupOptions: {
      external: /^lit/
    }
  }
})
