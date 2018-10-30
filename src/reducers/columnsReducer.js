const initialState = {
  columns: [
    {
      id: 1,
      title: "Coluna teste 1",
      cards: [
        {
          id: 1,
          name: "First litter card 1.1"
        },
        {
          id: 2,
          name: "First litter card 1.2"
        }
      ]
    },
    {
      id: 2,
      title: "Coluna teste 2",
      cards: [
        {
          id: 1,
          name: "First litter card 2.1"
        }
      ]
    }
  ]
};

export const columnsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NEW_COLUMN":
      return {
        ...state,
        columns: [
          ...state.columns,
          {
            title: action.newColumn.title,
            cards: []
          }
        ]
      };
    case "NEW_CARD":
      return {
        ...state,
        columns: state.columns.reduce((acc, column) => {
          if (column.title === action.newCard.columnTitle) {
            column.cards.push(action.newCard);
          }
          acc.push(column);
          return acc;
        }, [])
      };
    case "EDIT_CARD":
      return {
        ...state,
        columns: state.columns.reduce((acc, column) => {
          if (column.id === action.editedCard.column_id) {
            column.cards.reduce((newAcc, card) => {
              if (card.id === action.editedCard.id) {
                card.name = action.editedCard.name;
              }
              newAcc.push(card);
              column.cards = newAcc;
            }, []);
          }
          acc.push(column);
          return acc;
        }, [])
      };
    case "EDIT_COLUMN":
      return {
        ...state,
        columns: state.columns.reduce((acc, column) => {
          if (column.id === action.editedColumn.id) {
            column.title = action.editedColumn.title;
          }
          acc.push(column);
          return acc;
        }, [])
      };
    default:
      return state;
  }
};
