export const getRoundedNumber = (number) => {
  return +(Math.round(number + 'e+2') + 'e-2');
};
