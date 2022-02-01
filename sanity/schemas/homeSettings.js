import { MDstore as icon } from 'react-icons/md';

export default {
  name: 'home',
  title: 'Home Page Settings',
  type: 'document',
  icon,
  fieldsets: [
    { name: 'hero', title: 'Hero Headings' },
    { name: 'home_images', title: 'Images for the Home Page' },
  ],
  fields: [
    {
      name: 'heading',
      title: 'Hero Heading',
      type: 'string',
      fieldset: 'hero',
    },
    {
      name: 'subheading',
      title: 'Hero Sub Heading',
      type: 'string',
      fieldset: 'hero',
    },
    {
      name: 'altheading',
      title: 'Additional Hero Sub Heading',
      type: 'string',
      fieldset: 'hero',
    },
    {
      name: 'home_image',
      title: 'First Home Image ',
      type: 'image',
      options: {
        hotspot: true,
      },
      fieldset: 'home_images',
    },
    {
      name: 'second_home_image',
      title: 'Second Home Image ',
      type: 'image',
      options: {
        hotspot: true,
      },
      fieldset: 'home_images',
    },
    {
      name: 'third_home_image',
      title: 'Third Home Image ',
      type: 'image',
      options: {
        hotspot: true,
      },
      fieldset: 'home_images',
    },
    {
      name: 'home_services',
      title: 'Services Specials',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'services' }] }],
    },
  ],
};
