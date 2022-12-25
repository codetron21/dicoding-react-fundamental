import React from "react";
import PropTypes from "prop-types";
import NoteItem from "./NoteItem";

const ListNote = ({ items, onDelete, onArchive }) => (
  <div>
    {items.map((item) => (
      <NoteItem
        key={item.id.toString()}
        id={item.id}
        title={item.title}
        date={item.createdAt}
        body={item.body}
        archived={item.archived}
        onDelete={onDelete}
        onArchive={onArchive}
      />
    ))}
  </div>
);

ListNote.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
};

export default ListNote;
