import { MdOutlineContactPhone as icon } from 'react-icons/md';

export default {
  name: 'contact',
  title: 'Contact Information',
  type: 'document',
  icon,
  fieldsets: [
    {
      name: 'social',
      title: 'Social media handles',
    },
    {
      name: 'contactInfo',
      title: 'Contact Information',
    },
  ],
  fields: [
    {
      name: 'email',
      title: 'Business Email',
      type: 'string',
      fieldset: 'contactInfo',
    },
    {
      name: 'number',
      title: 'Phone Number',
      type: 'number',
      fieldset: 'contactInfo',
    },

    {
      name: 'street',
      title: 'Street Number & Name',
      type: 'string',
      fieldset: 'contactInfo',
    },
    {
      name: 'city',
      title: 'City',
      type: 'string',
      fieldset: 'contactInfo',
    },
    {
      name: 'postcode',
      title: 'Post Code',
      type: 'string',
      fieldset: 'contactInfo',
    },
    {
      name: 'facebook',
      title: 'Facebook',
      type: 'string',
      fieldset: 'social',
    },
    {
      name: 'instagram',
      title: 'Instagram',
      type: 'string',
      fieldset: 'social',
    },
  ],
};
