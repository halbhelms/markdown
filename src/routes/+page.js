<script>
   import documents from '../stores/documents'; // this is not a store, but an array
   import currentLicensor from '../stores/currentLicensor'; // this is not a store, but an object

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
  export function load({ params }) {
    return {
      documents: mergedDocuments
    }
  }

</script>