import { type SchemaTypeDefinition } from 'sanity'
import {postType} from './postType'
import {advocacyPost} from './advocacyPost'
import {projectPost} from './projectPost'
import {author} from './author'
import {category} from './category'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [postType, advocacyPost, projectPost, author, category],
}
