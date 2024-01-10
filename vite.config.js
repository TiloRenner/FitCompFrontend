import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import basicSsl from '@vitejs/plugin-basic-ssl'
import mkcert from 'vite-plugin-mkcert'
import fs from 'fs'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    //https:{
    //  key: fs.readFileSync('p:/localhost-key.pem'),
    //  cert:fs.readFileSync('p:/localhost.pem')
    //npm}
  },
  plugins: [react()],
})
