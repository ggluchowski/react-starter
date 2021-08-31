// selectors
export const getHeadersContent = ({headersContent}, title) => headersContent.find(header => header.title == title);

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}