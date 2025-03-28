<template>
</template>

<script>
	import { Swipe, SwipeItem } from 'vant';
	import { createApp } from 'vue';
	
	const app =createApp()
	app.use(Swipe)
	app.use(SwipeItem)
	
    export default {
	    name: 'kv'

	}
</script>

<style>
</style>