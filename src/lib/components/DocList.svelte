<script>
  import { currentLicensor } from '$lib/store';
  import DocItem from '$lib/components/DocItem.svelte';

  export let documents;
  $: globalDocs = documents.filter(doc => doc.global === true);
  $: licensorDocs = documents.filter(doc => doc.global === false);
</script>

<div class="doc-list">
{documents.length}
<!-- display globally accessible docs -->
{#each globalDocs as document}
  <DocItem {document} />
{/each}

<!-- display licensor-specific docs -->
{#each licensorDocs as document}
  <DocItem {document} />
{/each}
</div>

<style>
  .doc-list {
    background-color: #222222;
    color: #ccc;
    width: 250px;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
  }
</style>

