<script>
  import { currentLicensor } from '$lib/store';
  import DocItem from '$lib/components/DocItem.svelte';

  export let documents;
  const globalDocs = documents.filter(doc => doc.global === true);
  const licensorDocs = documents.filter(doc => doc.global === false);
</script>

<div class="doc-list">
<!-- display globally accessible docs -->
{#each globalDocs as document}
  <DocItem {document} />
{/each}

<!-- display licensor-specific docs -->
{#each licensorDocs as document}
  <DocItem {document} />
{/each}
</div>

