import { writable } from 'svelte/store';

export const documents = [
  {
    id: 1, 
    title: 'Making Sense of Your New Dashboard', 
    author: 'Jamie Friedlander', 
    contents: ``,
    global: true,
    assignedTo: []
  },
  {
    id: 2,
    title: 'When Would I Use a Rule?',
    author: 'Ally Wood',
    contents: `<p>Rules are useful when you want to create an <i>automatic</i> action on a listing.</p><br /><p>An example: your company has a policy that any listings with the word <b>vintage</b> in the listing text should automatically be <i>ignored.</i></p><br /><p>A rule will ensure this happens.</p><br /><p>Rules can speed up your workflow, letting you more quickly get to fun things.</p>`,
    global: true,
    assignedTo: []
  },
  {
    id: 3,
    title: 'Creating Custom Lists',
    author: 'Ally Wood',
    contents: `<p>Rules are useful when you want to create an <i>automatic</i> action on a listing.</p><br /><p>An example: your company has a policy that any listings with the word <b>vintage</b> in the listing text should automatically be <i>ignored.</i></p><br /><p>A rule will ensure this happens.</p><br /><p>Rules can speed up your workflow, letting you more quickly get to fun things.</p>`,
    global: true,
    assignedTo: []
  } ,
  {
    id: 4,
    title: 'A Better Way to Find Infringing Spider-Man Listings',
    author: 'Jamie Friedlander',
    contents: `<p>Our data analysts are trained to spot patterns in order to better identify <i>infringing</i> listings.</p><br /><p>Did you know that fully <b>42%</b> of infringing listings have the name, <b>Spider-Man</b> spelled wrong -- whereas that misspelling never appears in an approved seller?</p> <p>You can set up a <i>rule</i> for listings with misspellings, raising their <b>IPS</b> (<i>Infringement Probability Score</i>) to <b>95%</b></p>.<br/><p>See our article on <i><b>When Would I Use a Rule</b></i> to see how easy it is to create a rule.</p>`,
    global: false,
    assignedTo: [1]
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
export const currentLicensor = licensors.find(licensor => licensor.id === 1)

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