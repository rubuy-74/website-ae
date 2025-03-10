import type { CollectionConfig } from "payload";
import { ProductSize } from "./ProductSizeField";
import { isMerchant, isStaff } from '@/lib/utils'

export const Product: CollectionConfig = {
  slug: "product",
  labels: {
    singular: 'Produto',
    plural: 'Produtos',
  },
  admin: {
    useAsTitle: 'name',
    group: 'Loja',
  },
  access: {
    read: isMerchant,
    create: isStaff,
    update: isMerchant,
    delete: isStaff,
  },
  fields: [
    {
      name: "name",
      label: "Nome",
      type: "text",
      required: true,
    },
    {
      name: "price",
      label: "Preço",
      type: "number",
      required: true,
    },
    {
      name: 'photo',
      label: 'Foto',
      type: 'relationship',
      relationTo: 'media',
      required: true,
    },
    {
      name: "description",
      label: "Descrição",
      type: "text",
      required: true,
    },
    {
      name: "color",
      label: "Cor",
      type: "text", //TODO: Change to a fancy color picker
      required: true,
    },
    {
      name: "sizes",
      label: "Tamanhos",
      type: "array",
      fields: [
        ProductSize,
        {
          name: "quantity",
          label: "Quantidade",
          type: "number",
          required: true,
        },
      ],
    },
  ],
};
