<script>
  import { onMount } from 'svelte';

  let quill;
  let editorContent = '';

  onMount(async () => {
    quill = new Quill('#editor', {
      theme: 'snow'
    });

    // Update editorContent when text changes
    quill.on('text-change', function() {
      editorContent = quill.root.innerHTML;
    });
  });
</script>

<svelte:head>
  <script src="https://cdn.quilljs.com/1.3.6/quill.js"></script>
  <link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet">
</svelte:head>

<div id="editor">
  <!-- Quill will be instantiated here -->
</div>

<div id="editor-content">
  <h2>Editor Content:</h2>
  {@html editorContent}
</div>

<style>
  #editor {
    height: 375px;
  }

  #editor-content {
    margin-top: 20px;
    font-family: Barlow;
  }
</style>