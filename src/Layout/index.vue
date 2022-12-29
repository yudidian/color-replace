<template>
	<div class="common-layout">
		<el-container>
			<el-aside width="200px">Aside</el-aside>
			<el-container>
				<el-header>
					<Header></Header>
				</el-header>
				<el-main>Main</el-main>
				<el-footer>Footer</el-footer>
			</el-container>
		</el-container>
	</div>
</template>
<script setup lang="ts" name="Layout">
import Header from "./components/Header/index.vue";
</script>
<style scoped lang="scss">
.common-layout {
	width: 100vw;
	height: 100vh;
	.el-container {
		width: 100%;
		height: 100%;
	}
}
</style>
