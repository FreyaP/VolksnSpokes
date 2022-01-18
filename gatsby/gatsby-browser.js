import React from 'react';
import Layout from './src/components/Layout';

// every page will be wrapped in the Layout component
export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
