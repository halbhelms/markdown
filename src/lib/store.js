import { writable } from 'svelte/store';

let documents = [
  {
    id: 1, 
    title: 'Sample Document 1', 
    author: 'John Doe', 
    contents: `<p>Dear Sirs,</p><p><br></p><p>Hope <em>everything</em> is going well today.</p><p><br></p><p>Also...</p><ul><li>tomorrow</li><li>next day</li><li>next day after that</li></ul>`
  }
]

let categories = []

// DocumentStore actions
function createDocumentStore() {
  const { subscribe, set, update } = writable(documents);

  return {
    subscribe,
    add: (document) => update(currentDocuments => {
      return [...currentDocuments, document];
    }),
    remove: (id) => update(currentDocuments => currentDocuments.filter(doc => doc.id !== id))
  };
}

// CategoryStore actions
function createCategoryStore() {
  const { subscribe, set, update } = writable(categories);

  return {
    subscribe,
    add: (category) => update(currentCategories => {
      return [...currentCategories, category];
    }),
    remove: (category) => update(currentCategories => currentCategories.filter(cat => cat !== category))
  };
}
      
export const DocumentStore = createDocumentStore();
export const CategoryStore = createCategoryStore();