export const validation = {
  isDivideThousand(price) {
    return price % 1000 !== 0;
  },
  isZero(price) {
    return price === 0;
  },
  isNumber(price) {
    return isNaN(price);
  },
};
