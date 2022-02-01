import React from 'react';
import S from '@sanity/desk-tool/structure-builder';

export default function Sidebar() {
  return S.list()
    .title(`Volks N Spokes`)
    .items([
      S.listItem()
        .title('Home Page')
        .icon(() => <strong>icon</strong>)
        .child(S.editor().schemaType('home').documentId('Home')),

      S.listItem()
        .title('Contact Information')
        .icon(() => <strong>Info</strong>)
        .child(S.editor().schemaType('contact').documentId('Contact')),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() !== 'contact' && item.getId() !== 'home'
      ),
    ]);
}
