import { writable } from 'svelte/store';

let documents = [
  {
    id: 1, 
    title: 'Sample Document 1', 
    author: 'John Doe', 
    contents: `<p>Dear Sirs,</p><p><br></p><p>Hope <em>everything</em> is going well today.</p><p><br></p><p>Also...</p><ul><li>tomorrow</li><li>next day</li><li>next day after that</li></ul>`
  }
]

// DocumentStore actions
function createDocumentStore() {
  const { subscribe, set, update } = writable(documents);

  return {
    subscribe,
    add: (document) => update(currentDocuments => {
      document.id = currentDocuments.length + 1;
      return [...currentDocuments, document];
    }),
    remove: (id) => update(currentDocuments => currentDocuments.filter(doc => doc.id !== id))
  };
}

export const DocumentStore = createDocumentStore();