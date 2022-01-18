import { MdOutlineContactPhone as icon } from 'react-icons/md';

export default {
  name: 'contact',
  title: 'Contact Information',
  type: 'document',
  icon,
  fields: [
    {
      name: 'email',
      title: 'Business Email',
      type: 'string',
    },
    {
      name: 'number',
      title: 'Phone Number',
      type: 'number',
    },
    {
      name: 'streetNumber',
      title: 'Street Number',
      type: 'number',
    },
    {
      name: 'street',
      title: 'Street Name',
      type: 'string',
    },
    {
      name: 'city',
      title: 'City',
      type: 'string',
    },
  ],
};
