import {defineField, defineType} from 'sanity'

export const projectPost = defineType({
  name: 'projectPost',
  title: 'Project Post',
  type: 'document',
  fields: [
    defineField({
      name: 'orderId',
      title: 'Order ID',
      type: 'number',
      description: 'Posts are displayed in order by this number (higher numbers appear first). Auto-generated when creating a new post, but you can change it.',
      validation: (Rule) => Rule.required().integer().positive(),
      initialValue: async (_, context) => {
        // This will be handled by the custom component, but we set a default here too
        return 1
      },
      components: {
        input: (props) => {
          const OrderIdInput = require('../components/OrderIdInput').OrderIdInput
          return OrderIdInput(props)
        },
      },
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 4,
      description: 'Short description for preview cards',
    }),
    defineField({
      name: 'gallery',
      title: 'Image Gallery',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
          ],
        },
      ],
      options: {
        layout: 'grid',
      },
      components: {
        input: (props: any) => {
          // Import the component dynamically to avoid SSR issues
          const BulkImageUpload = require('../components/BulkImageUpload').BulkImageUpload
          return BulkImageUpload(props)
        },
      },
      description: 'Bulk upload: Use the "Select Multiple Images" button above, or drag and drop multiple images directly into this field. Unlimited images supported.',
    }),
    defineField({
      name: 'projectType',
      title: 'Project Type',
      type: 'string',
      options: {
        list: [
          {title: 'Defense', value: 'defense'},
          {title: 'Humanitarian', value: 'humanitarian'},
          {title: 'Infrastructure', value: 'infrastructure'},
          {title: 'Education', value: 'education'},
          {title: 'Medical', value: 'medical'},
          {title: 'Other', value: 'other'},
        ],
      },
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      orderId: 'orderId',
    },
    prepare(selection) {
      const {orderId} = selection
      return {
        ...selection,
        subtitle: `Order: ${orderId || 'N/A'}`,
      }
    },
  },
})

