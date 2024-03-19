import type { CollectionConfig } from 'payload/types'

import { customIDSlug } from '../slugs.js'

const CustomIDs: CollectionConfig = {
  slug: customIDSlug,
  admin: {
    defaultColumns: ['id', 'title', 'createdAt'],
    preview: () => 'https://payloadcms.com',
    useAsTitle: 'id',
  },
  fields: [
    {
      name: 'id',
      type: 'text',
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
    },
  ],
  versions: {
    drafts: false,
    maxPerDoc: 2,
  },
}

export default CustomIDs
