   import { documents } from '../../lib/store'; // this is not a store, but an array
   import { DocumentStore } from '../../lib/store'; // this is a store
   import { get } from 'svelte/store';
   console.log(Array.isArray(get(DocumentStore))) // true
   import { currentLicensor } from '../../lib/store'; // this is not a store, but an object
   console.log(typeof currentLicensor) // object

  function getDocumentsForLicensorId() {
    // filter the documents to only those assigned to the current licensor
    return documents.filter(doc => doc.assignedTo.includes(currentLicensor.id))
  }

  function getGlobalDocuments() {
    // filter the documents to only those with global === true
    return documents.filter(doc => doc.global)
  }

  // merge getDocumentsForLicensorId results with getGlobalDocuments results
  const mergedDocuments = [...getDocumentsForLicensorId(), ...getGlobalDocuments()]


  // return the merged results in a load function
  export async function load({ params }) {
    return {
      documents: mergedDocuments
    }
  }