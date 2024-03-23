<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<div>
	{#if data.post}
		<h1>{data.post.date}</h1>
		<article
			class="prose mx-auto md:prose-lg prose-pre:m-0 prose-pre:rounded-none prose-pre:overflow-x-auto"
		>
			{@html data.post.content}
		</article>
	{:else if data.error}
		<div class="alert alert-error">{data.error}</div>
	{:else}
		<div class="alert alert-warning">No data found</div>
	{/if}
</div>
