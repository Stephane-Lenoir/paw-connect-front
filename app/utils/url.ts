export const setUrlAnimal = (url) => {
  if (url.startsWith('/uploads/')) {
    return `http://localhost:3000${url}`;
  }
  return url;
};
