export const setUrlAnimal = (url: string | undefined): string | undefined => {
  if (url?.startsWith('/uploads/')) {
    return `http://localhost:3000${url}`;
  }
  return url;
};
