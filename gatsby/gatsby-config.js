import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: `Volks N Spokes`,
    siteUrl: `https://volksnspokes.com`,
    description: `Squamish mobile bike mechanic offering pick up and drop off service for bike repairs. Friendly advice and high quality repair.`,
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      // name of plugin - plugin for sourcing data from sanity to graphql
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'g7pwae56',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
