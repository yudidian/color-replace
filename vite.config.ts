import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import eslintPlugin from "vite-plugin-eslint";
import VueSetupExtend from "vite-plugin-vue-setup-extend";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src")
		}
	},
	css: {
		preprocessorOptions: {
			scss: {
				// additionalData: "@import '@/styles/theme/theme.scss';"
			}
		}
	},
	plugins: [
		vue(),
		VueSetupExtend(),
		eslintPlugin({
			include: ["src/**/*.ts", "src/**/*.vue", "src/*.ts", "src/*.vue"]
		})
	]
});
