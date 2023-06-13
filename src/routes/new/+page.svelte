<script>
  import { DocumentStore } from '$lib/store'
  import { onMount } from 'svelte';
  import { v4 as uuidv4 } from 'uuid';

  let quill;
  let editorContent = '';
  let title = '';
  let id = uuidv4();
  let category = '';

  function editDocument(event) {
    const document = $DocumentStore.find(doc => doc.title === event.target.innerHTML);
    quill.root.innerHTML = document.contents;
    title = document.title;
  }

  function saveNewDocument(event) {
    let document = {
      id: id,
      title: title,
      contents: editorContent,
      category: category
    }
    DocumentStore.add(document);
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

<main>
  <div id="explorer-div">Explorer
    {#each $DocumentStore as document}
      <p id="edit-link" on:click={editDocument}>{document.title}</p>
    {/each}
  </div>

  <div id="editor-div">
    <div id="title">
      <input bind:value={title} placeholder="Title" />
    </div>
    
    <div id="editor">
      <!-- Quill will be instantiated here -->
    </div>
    
    <button id="save-button" on:click={saveNewDocument}>Save</button>

    <!-- <div id="editor-content">
      <h2>Editor Content:</h2>
      {editorContent}
    </div> -->
  </div>
</main>



<style>
  main {
    display: grid;
    grid-template-columns: 1fr 3fr;
  }

  button {
    font-family: Barlow;
    font-size: 1.2em;
    padding: 0.5em;
    border: none;
    border-radius: 5px;
    background-color: #f0f0f0;
    cursor: pointer;
  }

  #edit-link {
    cursor: pointer;
  }

  #save-button, #editor-content {
    margin-left: 20px;
    margin-top: 20px;
  }

  #explorer-div {
    background-color: #f0f0f0;
    padding: 20px;
    height: 100vh;
  }

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