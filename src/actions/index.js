
let imageId = 0

export const addPost = (url, title) => ({
  type: 'ADD_POST',
  url,
  title,
  id: imageId++
});
