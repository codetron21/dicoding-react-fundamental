import React from "react";

import NoteItem from "./NoteItem";

const ListNote = ({ items, onDelete, onArchive }) => (
  <div>
    {items.map((item) => (
      <NoteItem
        key={item.id.toString()}
        id={item.id}
        title={item.title}
        body={item.body}
        archived={item.archived}
        onDelete={onDelete}
        onArchive={onArchive}
      />
    ))}
  </div>
);

export default ListNote;
