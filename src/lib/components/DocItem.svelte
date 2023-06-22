<script>
  export let document
  export let clickAction
</script>

<div class="doc-item">
  <a href={`http://localhost:5173/${clickAction}/${document.id}`} class={document.global ? 'bold' : ''}>{document.title}</a>
</div>

<style>
  a {
    color: inherit;
    text-decoration: none;
    font-size: 1em;
    display: inline-block;
    font-family: Barlow;
  }

  .bold {
    font-weight: bold;
  }

  .doc-item {
   margin-top: 6px;
   margin-left: 12px;
  }
</style>