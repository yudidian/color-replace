import { RouteRecordRaw } from "vue-router";

const routers: RouteRecordRaw[] = [
	{
		path: "/",
		name: "Layout",
		component: () => import("@/Layout/index.vue")
	}
];

export default routers;
