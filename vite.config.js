import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/nestflux/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        signup: resolve(__dirname, 'src/auth/SignupPage.html'),
        signin: resolve(__dirname, 'src/auth/SigninPage.html'),
        session: resolve(__dirname, 'src/user/session.html'),
        profil: resolve(__dirname, 'src/user/profile/profile.html'),
      },
    },
  },
});