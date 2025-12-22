import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/nestflux/', // Indispensable pour GitHub Pages
  build: {
    rollupOptions: {
      input: {
        // On indique à Vite où sont tous les fichiers HTML
        main: resolve(__dirname, 'index.html'),
        signup: resolve(__dirname, 'src/Auth/SignupPage.html'),
        signin: resolve(__dirname, 'src/Auth/SigninPage.html'),
        config: resolve(__dirname, 'src/user/Config.html'),
        profil: resolve(__dirname, 'src/user/Profil.html'),
      },
    },
  },
})