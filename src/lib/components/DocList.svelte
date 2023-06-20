<script>
  import { DocumentStore } from '$lib/store';
  import { getContext } from 'svelte';

  import DocItem from '$lib/components/DocItem.svelte';
  
</script>

Current Licensor:
{getContext('currentUser').name}