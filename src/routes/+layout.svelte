<script>
  import { LicensorStore } from '$lib/store';
  import { setContext } from 'svelte';

  function getLicensorById(id) {
    return $LicensorStore.find(licensor => licensor.id === id);
  }

  setContext('currentUser', getLicensorById(1))
</script>
<slot />