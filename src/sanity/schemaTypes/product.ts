// import { Rule } from '@sanity/types'


// const ProductSchema ={
//     name: 'product',
//     type: 'document',
//     title: 'Product',
//     fields: [
//       {
//         name: 'name',
//         type: 'string', 
//         title: 'Name',
//         validation: (value:any) => (value ? true : 'Category is required')

//       },
//       {
//         name: 'image',
//         type: 'image',
//         title: 'Image',
//         options: {
//           hotspot: true,
//         },
//         description: 'Upload an image of the product.',
//       },
//       {
//         name: 'price',
//         type: 'string',
//         title: 'Price',
//         validation: (Rule: Rule) => Rule.required().error('Price is required'),
//       },
//       {
//         name: 'description',
//         type: 'text',
//         title: 'Description',
//         validation: (Rule:Rule ) =>
//           Rule.max(150).warning('Keep the description under 150 characters.'),
//       },
//       {
//         name: 'slug',
//         type: 'slug',
//         title: 'slug',
//         options:{
//              source:"name",

//         },


        
        

//       },

     


//       {
//         name: 'discountPercentage',
//         type: 'number',
//         title: 'Discount Percentage',
//         validation: (Rule: Rule) =>
//           Rule.min(0).max(100).warning('Discount must be between 0 and 100.'),
//       },
//       {
//         name: 'isFeaturedProduct',
//         type: 'boolean',
//         title: 'Is Featured Product',
//       },
//       {
//         name: 'stockLevel',
//         type: 'number',
//         title: 'Stock Level',
//         validation: (Rule: Rule) => Rule.min(0).error('Stock level must be a positive number.'),
//       },
//       {
//         name: 'category',
//         type: 'string',
//         title: 'Category',
//         options: {
//           list: [
//             { title: 'Chair', value: 'Chair' },
//             { title: 'Sofa', value: 'Sofa' },
//           ],
//         },
//         validation: (Rule: Rule) => Rule.required().error('Category is required'),
//       },
//     ],
//   };
//   export default ProductSchema;
import { Rule } from '@sanity/types';

const ProductSchema = {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule: Rule) => Rule.required().error('Name is required'), // Required validation added
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
      description: 'Upload an image of the product.',
    },
    {
      name: 'price',
      type: 'string',
      title: 'Price',
      validation: (Rule: Rule) => Rule.required().error('Price is required'), // Correct use of required validation
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      validation: (Rule: Rule) =>
        Rule.max(150).warning('Keep the description under 150 characters.'),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name',
      },
    },
    {
      name: 'discountPercentage',
      type: 'number',
      title: 'Discount Percentage',
      validation: (Rule: Rule) =>
        Rule.min(0).max(100).warning('Discount must be between 0 and 100.'),
    },
    {
      name: 'isFeaturedProduct',
      type: 'boolean',
      title: 'Is Featured Product',
    },
    {
      name: 'stockLevel',
      type: 'number',
      title: 'Stock Level',
      validation: (Rule: Rule) =>
        Rule.min(0).error('Stock level must be a positive number.'),
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category',
      options: {
        list: [
          { title: 'Chair', value: 'Chair' },
          { title: 'Sofa', value: 'Sofa' },
        ],
      },
      validation: (Rule: Rule) => Rule.required().error('Category is required'), // Fixed validation
    },
  ],
};

export default ProductSchema;
