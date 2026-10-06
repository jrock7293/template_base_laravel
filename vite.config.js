import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/sass/app.css", "resources/js/app.js"],
            refresh: true,
        }),
    ],
    css: {
        preprocessorOptions: {
            scss: {
                api: "modern-compiler", // Usa el compilador moderno de Sass
                quietDeps: true, // Silencia advertencias provenientes de node_modules (Bootstrap)
                silenceDeprecations: [
                    "import",
                    "global-builtin",
                    "color-functions",
                    "if-function",
                ], // Opcional: oculta deprecaciones específicas
            },
        },
    },
});
