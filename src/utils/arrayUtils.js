export const sortArray = arr => {
  return arr.sort((a, b) => a - b);
};

export const matchArrays = (array, target) => {
  return array.filter(num => target.includes(num));
};
