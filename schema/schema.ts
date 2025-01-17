export default {
    name: 'bar',
    type: 'document',
    title: 'Bar Furniture',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Product Name',
        description: 'Enter the name of the bar furniture item',
      },
      {
        name: 'category',
        type: 'string',
        title: 'Category',
        options: {
          list: ['Bar', 'Bar Stool', 'Bar Cabinet', 'Bar Cart'], 
          layout: 'dropdown',
        },
        description: 'Select the category of the bar furniture item',
      },
      {
        name: 'price',
        type: 'number',
        title: 'Price',
        description: 'Enter the price of the bar furniture item',
      },
      {
        name: 'stock',
        type: 'number',
        title: 'Stock Level',
        description: 'Enter the number of items in stock',
      },
      {
        name: 'dimensions',
        type: 'object',
        title: 'Dimensions',
        fields: [
          { name: 'width', type: 'number', title: 'Width (in cm)' },
          { name: 'height', type: 'number', title: 'Height (in cm)' },
          { name: 'depth', type: 'number', title: 'Depth (in cm)' },
        ],
        description: 'Enter the dimensions of the bar furniture item',
      },
      {
        name: 'material',
        type: 'string',
        title: 'Material',
        description: 'Enter the material of the bar furniture item (e.g., wood, metal)',
      },
      {
        name: 'capacity',
        type: 'number',
        title: 'Capacity (No. of Bottles)',
        description: 'Enter the number of bottles the bar furniture can hold (if applicable)',
      },
      {
        name: 'features',
        type: 'array',
        title: 'Special Features',
        of: [{ type: 'string' }],
        description: 'Add any special features of the bar furniture (e.g., adjustable height, built-in storage)',
      },
  {
        name: 'image',
        type: 'image',
        title: 'Product Image',
        options: {
          hotspot: true, 
        },
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description',
        description: 'Enter a detailed description of the bar furniture item',
      },
    ],
  };