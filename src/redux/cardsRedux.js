import shortid from 'shortid';

// selectors
export const getCardsForColumn = ({cards}, columnId) => cards.filter(card => card.columnId == columnId);

export const getCardsForSearchResults = (state, searchString) => state.cards.filter(card => new RegExp(searchString, 'i').test(card.title));

export const getColumnForSearchResults = (state, columnId) => state.columns.find(column => column.id == columnId);

export const getListForSearchResults = (state, listId) => state.lists.find(list => list.id == listId);

// action name creator
const reducerName = 'cards';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_CARD = createActionName('ADD_CARD');

// action creators
export const createActionAddCard = payload => ({ payload: { ...payload, id: shortid.generate() }, type: ADD_CARD });

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_CARD:
      return [...statePart, action.payload];
    default:
      return statePart;
  }
}