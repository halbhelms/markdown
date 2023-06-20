<script>
  import { DocumentStore } from '$lib/store';
  import { getContext } from 'svelte';
  
</script>

Name:
{getContext('currentUser').name}