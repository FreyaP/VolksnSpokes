import { MdPersonPinCircle as icon } from 'react-icons/md';

export default {
  name: 'about',
  title: 'About Information',
  icon,
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Paragraph title',
      type: 'string',
      description: 'Heading for the paragraph or question to be answered',
    },
    {
      name: 'paragragh',
      title: 'Paragraph',
      type: 'text',
      description: 'Paragraph or answer to the heading question',
    },
    {
      name: 'image',
      title: 'Image related to the question',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'order',
      title: 'Display order',
      type: 'number',
      description: 'Lower number will be displayed first',
    },
  ],
};
