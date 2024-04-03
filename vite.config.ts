import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

// Load .env variables
dotenv.config();

export default defineConfig({
    plugins: [react()],
    define: {
        VITE_RAPIDAPI_KEY: JSON.stringify(process.env.VITE_RAPIDAPI_KEY),
        VITE_RAPIDAPI_HOST: JSON.stringify(process.env.VITE_RAPIDAPI_HOST),
    },
});
