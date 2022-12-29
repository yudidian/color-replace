import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "@/styles/themeCSS/light.css";
import "@/styles/themeCSS/dark.css";
import Router from "@/router";

import App from "./App.vue";

const app = createApp(App);

app.use(ElementPlus).use(Router);
app.mount("#app");
