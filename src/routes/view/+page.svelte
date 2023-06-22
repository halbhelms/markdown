<script>
  import DocList from '$lib/components/DocList.svelte'
  export let data
  console.log(data.documents)
</script>

<container class="split-container">
  <DocList documents={data.documents} />
  <div class="document-view">Document</div>
</container>

<style>
  .split-container {
    display: grid;
    grid-template-columns: 250px 100%;
    height: 100%;
  }

  .document-view {
    flex: 1;
    background-color: #f0f0f0;
  }
</style>