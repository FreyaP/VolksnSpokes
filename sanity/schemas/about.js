import { MdPersonPinCircle as icon } from 'react-icons/md';

export default {
  name: 'about',
  title: 'About Information',
  icon,
  type: 'document',
  fields: [
    {
      name: 'bio',
      title: 'Bio for Volks n Spokes',
      type: 'string',
      description: 'Short paragraph about Volks N Spokes',
    },
  ],
};
