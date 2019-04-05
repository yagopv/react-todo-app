import React from 'react';
import { ListItem } from './ListItem';

export function List({ items, onComplete, onRemove }) {
  if (!items) {
    return null;
  }

  return items.map(item => (
    <ListItem
      key={item.id}
      item={item}
      onComplete={onComplete}
      onRemove={onRemove}
    />
  ));
}
