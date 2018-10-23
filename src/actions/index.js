//Action creator que retorn a action e o valor da coluna que será criado
export const newColumn = value => ({
  type: "NEW_COLUMN",
  newColumn: {title: value}
});

export const editColumn = column => ({
  type: "EDIT_COLUMN",
  editedColumn: column
});

export const newCard = card => ({
  type: "NEW_CARD",
  newCard: card
});
