import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
    build: {
        outDir: "dist",
        assetsDir: "assets",
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, "./index.html"),
                js: path.resolve(__dirname, "src/assets/js/jquery.min.js"),
            },
        },
    },
});