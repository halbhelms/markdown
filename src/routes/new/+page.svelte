<script>
  import { DocumentStore } from '$lib/store'
  import { onMount } from 'svelte';

  let quill;
  let editorContent = '';
  let title = '';

  function saveDocument() {
    console.log(editorContent);
  }

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


<div id="title">
  <input bind:value={title} placeholder="Title" />
</div>
<div id="editor">
  <!-- Quill will be instantiated here -->
</div>

<button on:click={saveDocument}>Save</button>

<p>{title}</p>

<div id="editor-content">
  <h2>Editor Content:</h2>
  {editorContent}
</div>



<style>
  #editor {
    height: 375px;
  }

  #title {
    margin-top: 20px;
    margin-bottom: 20px;
    margin-right: 20px;
    width: 100%;
  }

  #title input {
    width: calc(100% - 20px);
    font-size: 1.2em;
    font-family: Barlow;
    border: none;
    border-bottom: 1px solid #ccc;
    padding: 0.5em;
    margin-right: 20px;
  }

  #editor-content {
    margin-top: 20px;
    font-family: Barlow;
  }
</style>