export const stringToArray = (string) => {
  return string.split(',').map((item) => Number(item));
};

export const stringToNumber = (string) => {
  return Number(string);
};

export const getArrayLikeString = (array) => {
  let result = '';
  array.forEach((item, index) => {
    if (index === 0) {
      result += '[';
    }
    result += item;
    if (index < array.length - 1) {
      result += ', ';
    }
    if (index === array.length - 1) {
      result += ']';
    }
  });
  return result;
};
