import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'


dotenv.config()

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/RAN-ONLINE-EP7",
  server: {
    port: Number(process.env.PORT)
    // , host: true,//expose network
  },
  define: {
    'process.env.PORT': `${process.env.PORT}`,
  }
})

