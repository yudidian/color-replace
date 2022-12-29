import { createRouter, createWebHashHistory } from "vue-router";
import routers from "./routers";
const Router = createRouter({
	history: createWebHashHistory(),
	routes: routers
});
export default Router;
