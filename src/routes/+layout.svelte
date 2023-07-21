<script lang="ts">
	import '../app.css';
</script>

<main>
	<slot />
</main>

<style>
	main {
		display: grid;
		place-items: center;
		min-height: 100vh;
		background: #1f1c1c;
	}
</style>
