import { type SchemaTypeDefinition } from 'sanity'

import { orderType } from './orderType'
import { productType } from './productType'
import { customerType } from './customerTypes'
import { categoryType } from './categoryType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categoryType, customerType, productType, orderType],
}