
const imageFeed = (feed = [], action) => {
  if (action.type === 'ADD_POST') {
      return [...feed,
        {
          id: action.id,
          url: action.url,
          title: action.title
        }
      ];
  }
  
  return feed;
}

export default imageFeed;