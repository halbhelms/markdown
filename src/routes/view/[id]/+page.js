import { documents } from '$lib/store';

export function load({ params }) {
  return {
    document: documents.find(doc => doc.id === parseInt(params.id))
  }
}