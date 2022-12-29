<template>
	<div class="header-content">
		<div class="header-left"></div>
		<div class="header-right">
			<el-switch v-model="themeValue" />
		</div>
	</div>
</template>

<script setup lang="ts" name="Header">
import { ref, watch } from "vue";
const themeValue = ref(true);
watch(themeValue, val => {
	if (!val) {
		window.document.documentElement.setAttribute("class", "dark");
	} else {
		window.document.documentElement.removeAttribute("class");
	}
});
</script>

<style scoped lang="scss">
.header-content {
	width: 100%;
	height: 100%;
	display: flex;
	background-color: var(--el-bg-color);
	justify-content: flex-start;
	align-items: center;
	.header-left {
	}
	.header-right {
		padding-right: 10px;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin-left: auto;
	}
}
</style>
