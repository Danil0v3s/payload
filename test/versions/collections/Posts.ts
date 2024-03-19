import type { CollectionConfig } from 'payload/types'

import {
  autosaveCollectionSlug,
  draftCollectionSlug,
  postCollectionSlug,
  versionCollectionSlug,
} from '../slugs'

const Posts: CollectionConfig = {
  slug: postCollectionSlug,
  fields: [
    {
      name: 'relationToAutosaves',
      type: 'relationship',
      relationTo: autosaveCollectionSlug,
    },
    {
      name: 'relationToVersions',
      type: 'relationship',
      relationTo: versionCollectionSlug,
    },
    {
      name: 'relationToDrafts',
      type: 'relationship',
      relationTo: draftCollectionSlug,
    },
  ],
}

export default Posts
