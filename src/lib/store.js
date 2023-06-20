import { writable } from 'svelte/store';

export const documents = [
  {
    id: 1, 
    title: 'Making Sense of Your New Dashboard', 
    author: 'Jamie Friedlander', 
    contents: ``,
    availableTo: [1, 2, 3]
  },
  {
    id: 2,
    title: 'When Would I Use a Rule?',
    author: 'Ally Wood',
    contents: `<p>Rules are useful when you want to create an <i>automatic</i> action on a listing.</p><br /><p>An example: your company has a policy that any listings with the word <b>vintage</b> in the listing text should automatically be <i>ignored.</i></p><br /><p>A rule will ensure this happens.</p><br /><p>Rules can speed up your workflow, letting you more quickly get to fun things.</p>`
  },
  {
    id: 3,
    title: 'Creating Custom Lists',
    author: 'Ally Wood',
    contents: `<p>Rules are useful when you want to create an <i>automatic</i> action on a listing.</p><br /><p>An example: your company has a policy that any listings with the word <b>vintage</b> in the listing text should automatically be <i>ignored.</i></p><br /><p>A rule will ensure this happens.</p><br /><p>Rules can speed up your workflow, letting you more quickly get to fun things.</p>`
  }   
]

export const licensors = [
  {
    id: 1,
    name: 'Marvel',
  },
  {
    id: 2,
    name: 'Mr. Beast',
  },
  {
    id: 3,
    name: 'Sony Music',
  },
]
export const currentLicensor = licensors.find(licensor => licensor.name === 'Marvel')

// LicensorStore actions
function createLicensorStore() {
  const { subscribe, set, update } = writable(licensors);
  return {
    subscribe,
    set,
    update
  };
}

// DocumentStore actions
function createDocumentStore() {
  const { subscribe, set, update } = writable(documents);
  
  return {
    subscribe,
    add: (document) => update(currentDocuments => {
      return [...currentDocuments, document];
    }),
    remove: (id) => update(currentDocuments => currentDocuments.filter(doc => doc.id !== id)),
  };

}

export const DocumentStore = createDocumentStore();
export const LicensorStore = createLicensorStore();