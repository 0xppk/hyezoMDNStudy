<script lang="ts">
	import { onMount } from 'svelte';
	import { PopupShadow } from './shadowModel';

	onMount(() => {
		if (customElements.get('popup-info')) return;
		customElements.define('popup-info', PopupShadow);
	});
</script>

<popup-info img="color.png" data-text="발자크와 스탕달">
	<message>
		<p style:color={'red'}>ㅇㄹㅇ참깨라면</p>
	</message>
</popup-info>

<template id="message">
	<style>
		p {
			color: #ecec;
			background-color: #666;
			padding: 5px;
		}
	</style>
	<slot name="my-message"><p>신라면 말고 진라면</p></slot>
</template>
