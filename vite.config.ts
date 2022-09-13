/// <reference types='vitest' />
/// <reference types='vite/client' />

import path from 'path'
import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@atoms': path.resolve(__dirname, 'src/atoms'),
      '@molecules': path.resolve(__dirname, 'src/molecules'),
      '@organisms': path.resolve(__dirname, 'src/organisms'),
      '@tokens': path.resolve(__dirname, 'src/tokens')
    }
  },
  test: {
    globals: true,
    setupFiles: 'src/setupTests.ts',
    environment: 'jsdom'
  },
  plugins: [react()]
})
