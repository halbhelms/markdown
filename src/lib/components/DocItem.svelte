<script>
  export let document
  export let clickAction
</script>
{#if document.global}<img src="global.png" width="24" alt="global" />{/if}
<a href={`http://localhost:5173/${clickAction}/${document.id}`}>{document.title}</a>

<style>
  a {
    color: black;
    text-decoration: none;
    font-size: 1.2em;
  }
</style>