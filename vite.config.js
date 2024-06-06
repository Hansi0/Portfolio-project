import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/Portfolio-project/',  // This should match the repository name
  plugins: [react()],
});
