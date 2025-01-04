<script>
	import '../app.css'
</script>

<div class="page">
	<main>
		<h1>Home Page</h1>

		<section>
			<h2>A heading</h2>
			<p>A blue rectangle...</p>
			<div class="square" />
		</section>
	</main>
</div>

<style>
	.page {
		display: flex;
		flex-direction: column;

		width: 100vw;
		min-height: 100vh;
	}

	main {
		padding: $space.sm;
	}

	.square {
		background: $color.strong;
		max-width: $width.min;
		height: 64px;
	}
</style>
