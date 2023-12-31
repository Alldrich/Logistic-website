import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    include: ['src/test/unit/**/*.test.ts'],
    environment: 'jsdom',
  },
})
