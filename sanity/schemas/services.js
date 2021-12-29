import { GiSpanner as icon } from 'react-icons/gi';

export default {
  name: 'services',
  title: 'Services',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Name of service',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description of service',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Price - in cents',
      type: 'number',
      // add custom component for price
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
